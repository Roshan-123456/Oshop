import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../shared/service/auth.service';
import { UserService } from '../../shared/service/user.service';
import { AppUser } from '../../shared/models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  
  constructor( private afauth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
 
    return this.afauth.appUser$
    .pipe(map(appUser => appUser.isAdmin));
          
  }


}
