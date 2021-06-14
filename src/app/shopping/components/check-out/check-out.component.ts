import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/service/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  {

 
  cart$: Observable<ShoppingCart>;
  userSubscription: Subscription;
  cartSubscription: Subscription;
  constructor(private shoppingCartService: ShoppingCartService) { }
 
 async ngOnInit() {

   this.cart$ = await this.shoppingCartService.getCart();

  }
}
