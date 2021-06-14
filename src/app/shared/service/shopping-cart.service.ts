import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Product } from '../models/product';
import 'rxjs/add/operator/take';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  

 async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCart();
    return this.db.object('/shopping-carts/' + cartId)
    .snapshotChanges().pipe(map((x:any) => {
      let key = x.key;
      let items = key ? x.payload.val().items : {};
      return new ShoppingCart(items);
    }));
    
    
  }

  constructor(private db: AngularFireDatabase) { }

  
  addToCart(product: Product) {
    this.updateCart(product, 1);
  }

  removeFromCart(product: Product) {
    this.updateCart(product, -1);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCart();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }


  
  private create() {
    //this function used in product-card.component.ts
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object(
      '/shopping-carts/' + cartId + '/items/' + productId );
    
  }

  private async getOrCreateCart(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

    
  }




  private async updateCart(product: Product, change: number) {
    let cartId = await this.getOrCreateCart();
    let items$ = this.getItem(cartId, product.key);

    items$
      .valueChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
          if (!item) {
            items$.set({
              title: product.title,
              imageUrl: product.imgeUrl,
              price: product.price,
              quantity: 1
            });
          } else {
            // @ts-ignore
            const quantity = item.quantity + change;
            if (quantity === 0) { items$.remove(); } else { items$.update({ quantity }); }
          }
    });
  }
}
