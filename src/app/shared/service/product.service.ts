import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private db: AngularFireDatabase) { }

  create(product:any){
    return this.db.list('/products').push(product);

  }

  getAll() {
    return this.db
      .list('/products')
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {}}))
        )
      );
  }

  get(productId:any){
    return this.db.object('/products/' + productId);

  }

  update(productId:any , product:any){
     return this.db.object('/products/' +productId).update(product);
  
  }

  delete(productId:any){
    return this.db.object('/products/' + productId).remove();
  }
}
