import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
   user$:Observable<firebase.default.User | null>;
  userInfo:any;
   
  constructor(private afAuth: AngularFireAuth, private Route: ActivatedRoute,private userService: UserService) { 
    this.user$ = afAuth.authState;
    
    //this.user$
    //.subscribe(
   //   (result: any) => {
        //  this.userInfo = result.displayName;
      //}
    //);
  }
    
  
    
    
  login(){
   let returnUrl= this.Route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    
   this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider()).then(
    res=>{
      console.log('login sussceful');
    }).catch(err=>{
      console.log('error while sign in ',err);
    }) 
  
  // this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }
  logout(){
    this.afAuth.signOut();
    
  }

  get appUser$()
  {
    return this.user$
    .pipe(switchMap(user => {
      if(user) return this.userService.get(user.uid);

      return of(null);
    }));
  }

}
