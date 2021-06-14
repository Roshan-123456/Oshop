import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/service/auth.service';
import { OrderService } from '../../../shared/service/order.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders$:any;

  constructor(private auth: AuthService, private orderService: OrderService) {
    this.orders$ = auth.user$.pipe(switchMap((u:any) => orderService.getOrderByUser(u.uid)));
    }

  ngOnInit(): void {
  }

}
