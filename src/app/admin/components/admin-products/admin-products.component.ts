import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../shared/service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  Products: any=[];
  filtereProducts: any[];
  subscription: Subscription;
 

  constructor(private productService: ProductService) {

   this.subscription = this.productService.getAll().subscribe(products => {
    this.filtereProducts = this.Products = products;

  
   });
   }


   filter(query:string){
     this.filtereProducts = (query) ?
     this.Products.filter((p:any) => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) :
     this.Products;

   }

   ngOnDestroy(){
 
    this.subscription.unsubscribe();
   }

   
  ngOnInit(): void {
  }

}
