import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/service/category.service';
import { ProductService } from '../../../shared/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$:any;
  product:any= {};
  id:any;
  constructor(
     private categoryService: CategoryService,
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = categoryService.getCategories();
    
    this.id =this.route.snapshot.params['id'];
   if(this.id) this.productService.get(this.id).valueChanges().subscribe((p:any)=>{
     this.product = p
     
    });
   }

   save(product:any){
 
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
     
    this.router.navigate(['/admin/products']);
   }

   delete(){
     if(!confirm('Are you sure you want to delete  this product ?')) return;
    
       this.productService.delete(this.id);
       this.router.navigate(['/admin/products']);
     
   }

  ngOnInit(): void {
  }

}
