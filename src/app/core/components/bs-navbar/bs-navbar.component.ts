import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AppUser } from '../../../shared/models/app-user';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { AuthService } from '../../../shared/service/auth.service';
import { ShoppingCartService } from '../../../shared/service/shopping-cart.service';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  shoppingCartItemCount:number;

  constructor(public auth: AuthService, private shoppingCartService: ShoppingCartService) {

   
  // })
   // var user = firebase.auth().currentUser;
    //if(user != null)
    //{
      //const name =user.displayName;
      //console.log(name);
  //  }

   }

  async  ngOnInit(){

    this.auth.appUser$.subscribe(appUser => this.appUser= appUser);
    
     this.cart$ = await this.shoppingCartService.getCart();
    
    
    // cart$.valueChanges().subscribe((cart:any)=>{
      // this.shoppingCartItemCount = 0;
       //for(let productID in cart?.items)
        //this.shoppingCartItemCount += cart?.items[productID].quantity;
       
     //});
  
   }

  logout(){
    this.auth.logout();
  }

}
