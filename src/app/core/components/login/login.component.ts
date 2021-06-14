import { Component } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth: AuthService, private router: ActivatedRoute) {

  }

  login(){
   this.auth.login();
  }
}
