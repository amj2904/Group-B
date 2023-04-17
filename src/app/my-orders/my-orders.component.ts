import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../shared/productapi.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderData:any[]|undefined
  constructor(private product:ProductapiService) { }

  ngOnInit(): void {
    this.product.orderList().subscribe((result) => {
    this.orderData = result
    console.log(this.orderData)
    })
  }

}
