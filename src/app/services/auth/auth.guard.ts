import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }


  canActivate() {
 if (localStorage.getItem('currentUser')) {
   // logged in so return true
   console.log('localStorage.getItem',localStorage.getItem('currentUser'))
   return true;
 }
 // not logged in so redirect to login page
 this.router.navigate(['/listformations']);
 return false;
}
}
