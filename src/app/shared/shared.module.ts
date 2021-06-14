import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';

import { CategoryService } from './service/category.service';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { ShoppingCartService } from './service/shopping-cart.service';
import { UserService } from './service/user.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],

  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],

  exports: [
    CommonModule,
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
  ],

  providers: [

    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
 
})export class SharedModule { }
