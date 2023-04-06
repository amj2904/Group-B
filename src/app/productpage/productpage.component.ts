import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../shared/productapi.service';
import { Productmodel } from '../model/productmodel';
import { CartserviceService } from '../shared/cartservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  allProductData!: any;
  public productList : any ;
  searchKey:string ="";
  addCartData:any;
  pQuantity:any
  productPage:Productmodel[]=[];
  

  constructor(private productpageService:ProductapiService,private cartService : CartserviceService,private router:Router ) { }

  ngOnInit(): void {
    this.productpageService.getProduct()
    .subscribe(res=>{
      this.productList=res; 
      console.log(this.productList);
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })

    this.getProductPage();

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any,pQuantity:number){
    if (pQuantity >=1){
      this.cartService.addtoCart(item,pQuantity);
    console.log("addtocart()........... productpage "+item +" quantity :" +pQuantity)
    }
    else{
      alert(item.productName +" "+"Please Select Quantity Of Product !!!")
    }
    // this.cartService.addtoCart(item,pQuantity);
    // console.log("addtocart()........... productpage "+item +" quantity :" +pQuantity)
  }
  
  getProductPage(){
    this.productpageService.getProduct().subscribe(productPage=>this.productPage=productPage)
  }

 }

  