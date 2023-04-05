import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../shared/productapi.service';
@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  allProductData!: any;

  constructor(private api: ProductapiService) { }

  ngOnInit(): void {
    this.getAllData2();
  }

  getAllData2() {
    this.api.getProduct().subscribe(res => {
      console.log(res);
      this.allProductData = res;


     
     
    })

  }
}
