import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './../shared/service/auth-guard.service';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    
    RouterModule.forChild([
      
      {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
      {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuardService] },

    ]),
  ],

  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],

  providers: [
    AdminAuthGuardService

  ]

})
export class AdminModule { }
