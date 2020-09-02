import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {
    baseUrl,
    loginUrl,
    tokenValidUrl,
    UpdatePushTokenURL,
    userInfoUrl,
    registartionurl,
    baseUrl2,
    register
} from '../../environments/Config/AppConfig';
import {UserLoginDto} from '../models/User/UserLoginDto';
import {User} from '../models/User/User';
import {usertoreg} from '../models/User/User'; 


@Injectable({
    providedIn: 'root'
})
export class AuthService {
 
    constructor(private  http: HttpClient) {
    }


    registeruser(user:usertoreg) {
        
          const url = baseUrl.url + register;
          return this.http.post(url,user);
         }





    login(userinfo: UserLoginDto) {
    let optionRequete = {
      params:new HttpParams()
      .set('email', userinfo.email)
      .set('password', userinfo.password)
    };

        const url = baseUrl2.url + loginUrl;
        return this.http.get(url,optionRequete);
    }

    registration(user: User) {
      let optionRequete = {
        params:new HttpParams()
        .set('name', user.name)
        .set('email', user.email)
        .set('password', user.password)
      };
  
          const url = baseUrl2.url + registartionurl;
          return this.http.get(url,optionRequete);
      }

    /*allRoles() {
        let hed = new HttpHeaders();
        hed = hed.set('Authorization', 'Bearer ' + this.getAuthInfo().token);
        const httpOptions = {
            headers: hed
        };
        const url = baseUrl.url + allrolesUrl;
        return this.http.get(url, httpOptions);
    }

    allUsers() {
        let hed = new HttpHeaders();
        hed = hed.set('Authorization', 'Bearer ' + this.getAuthInfo().token);
        const httpOptions = {
            headers: hed
        };
        const url = baseUrl.url + allUsersUrl;
        return this.http.get(url, httpOptions);
    }

    createUser(userinfo: User) {
        let hed = new HttpHeaders();
        hed = hed.set('Authorization', 'Bearer ' + this.getAuthInfo().token);
        const httpOptions = {
            headers: hed
        };
        const url = baseUrl.url + createUserUrl;
        return this.http.post(url, userinfo, httpOptions);
    }*/

  /*  updateUser(userinfo: User) {
        let hed = new HttpHeaders();
        hed = hed.set('Authorization', 'Bearer ' + this.getAuthInfo().token);
        const httpOptions = {
            headers: hed
        };
        const url = baseUrl.url + updateUserUrl;
        return this.http.post(url, userinfo, httpOptions);
    }
*/
   /* deleteUser(email: string) {
        let hed = new HttpHeaders();
        hed = hed.set('Authorization', 'Bearer ' + this.getAuthInfo().token);
        const httpOptions = {
            headers: hed
        };
        const url = baseUrl.url + deleteUserUrl;
        return this.http.post(url, email, httpOptions);
    }*/

    getUserInfo() {
        let hed = new HttpHeaders();
        hed = hed.set('Authorization', 'Bearer ' + this.getAuthInfo().token);
        const httpOptions = {
            headers: hed
        };
        const url = baseUrl.url + userInfoUrl;
        return this.http.post(url, this.getAuthInfo().username, httpOptions);
    }

    getAuthInfo(): any {
        let res = JSON.parse(localStorage.getItem('logininfo'));
        if (res == null) {
            res = {token: 'dsff5s'};

        }
        return res;
    }

   
    hasRole(role: string) {
        const user_info: User = JSON.parse(localStorage.getItem('user_info'));

        return user_info.roles.filter(x => x.name === 'ROLE_' + role)[0] != null;
    }

    isTokenExpired() {
        let hed = new HttpHeaders();
        hed = hed.set('Authorization', 'Bearer ' + this.getAuthInfo().token);
        const httpOptions = {
            headers: hed
        };
        const url = baseUrl.url + tokenValidUrl;
        return this.http.get(url, httpOptions);
    }

    logout() {
        localStorage.removeItem('logininfo');
        localStorage.removeItem('user_info');

    }

    updatePushNotifToken(notif: string) {
        let hed = new HttpHeaders();
        hed = hed.set('Authorization', 'Bearer ' + this.getAuthInfo().token);
        const httpOptions = {
            headers: hed
        };
        const url = baseUrl.url + UpdatePushTokenURL;
        return this.http.post(url, notif.toString(), httpOptions);
    }
}
