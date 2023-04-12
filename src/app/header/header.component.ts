import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../shared/productapi.service';
import { Productmodel } from '../model/productmodel';
import { CartserviceService } from '../shared/cartservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm : string = '';
  constructor(private cartService:CartserviceService,private productpageService:ProductapiService) { }
  productPage:Productmodel[]=[];
  ngOnInit(): void {this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  getProductPage(){
    this.productpageService.getProduct().subscribe(productPage=>this.productPage=productPage)
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

}


