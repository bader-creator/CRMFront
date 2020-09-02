import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { secureuser } from 'src/app/user.model';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  username: string
  password: string


  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }




  login(username: string, password: string): Observable<boolean> {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/x-www-form-urlencoded');


    let logus = new secureuser()

    logus.username = username;
    logus.password = password;


    return this.http.post('http://192.168.11.28:8001/api/login_check', logus, { headers: headers })
      .pipe(map((response: any) => {
        // login successful if there's a jwt token in the response
        const tok = response && response.token;
        if (tok) {
          // set token property
          this.token = tok;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: tok }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }))
  }




  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handelError(error: Response) {

    return Observable.throw(error.json() || 'server error');

  }



}
