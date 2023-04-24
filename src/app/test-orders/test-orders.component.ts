import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-test-orders',
  templateUrl: './test-orders.component.html',
  styleUrls: ['./test-orders.component.css']
})
export class TestOrdersComponent implements OnInit {
  
  orderData:any[]=[];

  constructor(private ordersService:OrdersService ) { }

  ngOnInit(): void {

    this.ordersService.getOrders().subscribe(res=>{
      this.orderData=res;
      console.log("orderData",this.orderData);
    })
  }

}
