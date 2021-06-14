import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { ProductService } from '../../service/product.service';
import { ShoppingCart } from '../../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private CartService: ShoppingCartService) { 
    
  }
  

  addToCart() {
    this.CartService.addToCart(this.product);
  }
}


