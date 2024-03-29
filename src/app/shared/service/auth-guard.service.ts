import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private  router: Router) { }

  canActivate(route: any, state: RouterStateSnapshot){
    
    return this.auth.user$.pipe(map((user:any)=>{
    
      if(user) return true;

      this.router.navigate(['/login'], { queryParams : { returnUrl : state.url}});
      return false;

    }))
      
  }
  
}
