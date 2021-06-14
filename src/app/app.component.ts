import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from './shared/service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  constructor(private auth: AuthService, private route: Router, private userService: UserService) {
    
    auth.user$.subscribe((user:any) =>{
        if(user){
 
          userService.save(user);
         

          let returnUrl = localStorage.getItem('returnUrl') as string;
          route.navigateByUrl(returnUrl);
        }
    })

  
  }
}
