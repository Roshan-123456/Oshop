import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { ShoppingCartService } from '../../../shared/service/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   products: any=[];
   filteredProducts: Product[] = [];
   category:any;
   cart$: Observable<ShoppingCart>;
  

  constructor(
   private route: ActivatedRoute,
    private productService: ProductService,
   private shoppingCartService: ShoppingCartService
    ) {   }
  

 async ngOnInit() {
 
 this.cart$ =  await this.shoppingCartService.getCart();
 this.populateProducts();
  }

  private populateProducts(){
    
    this.products = this.productService
    .getAll()
    .subscribe(products => {
      this.products = products;
   
      this.route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
       this.applyFilter();
        
      });
    });
  }
 
  private applyFilter(){
    this.filteredProducts = (this.category) ?
    this.products.filter((p:any) => p.category.toLowerCase() === this.category.toLowerCase()) :
    this.products;

  }

}
