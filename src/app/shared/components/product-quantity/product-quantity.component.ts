import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../service/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent  {

  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart:any;

  constructor(private CartService: ShoppingCartService) { 
    
  }
  

  addToCart() {
    this.CartService.addToCart(this.product);
  }

  removeFromCart(){
    this.CartService.removeFromCart(this.product);
  }

  
 

}
