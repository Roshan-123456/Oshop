import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/service/auth.service';
import { Order } from '../../../shared/models/order';
import { OrderService } from '../../../shared/service/order.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  
  @Input('cart') cart: ShoppingCart;
  shipping = {
    name :'',
    line1: '',
    line2:'',
    city: ''
  };
  userId:any;


  constructor(
    private router: Router,
    private orderService: OrderService, 
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.userId = user?.uid)

  }

  async placeOrder(){
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.storeOrder(order);  
    this.router.navigate(['/order-success', result.key]);

  }

}
