import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


import {Observable} from 'rxjs/internal/Observable';
import {AuthService} from '../services/auth.service';
import {Subject} from 'rxjs/internal/Subject';


@Injectable()
export class AuthGuard implements CanActivate {
    subject: Subject<boolean>;

    constructor(public auth: AuthService, public router: Router) {
        this.subject = new Subject<boolean>();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        let authenticated = this.auth.isTokenExpired();

        authenticated.subscribe(
            (res: any) => {

                this.subject.next(true);
            },
            error1 => {
                this.auth.logout();
                this.router.navigate([''],);
            }
        );
        return this.subject.asObservable();
    }

    // canActivate(route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): boolean {
    //
    //   if ( this.auth.getAuthInfo() == null ) {
    //     this.router.navigate([''], );
    //     return false;
    //   } else {
    //     return true;
    //   }
    // }
}
