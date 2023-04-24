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
  public filterCategory: any;
  searchKey:string ="";
  addCartData:any;
  pQuantity:any
  productPage:Productmodel[]=[];
  nameSearch: any;

  constructor(private productpageService:ProductapiService,private cartService : CartserviceService,private router:Router ) { }

  ngOnInit(): void {
    this.productpageService.getProduct()
    .subscribe(res=>{
      this.productList=res; 
      this.filterCategory = res;
      console.log(this.productList);
      this.productList.forEach((a:any) => {
        if(a.prodcuctCategory === 'mobile'){
          a.prodcuctCategory = "mobile"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    })

    this.getProductPage();
    
   

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  
  getProductPage(){
    this.productpageService.getProduct().subscribe(productPage=>this.productPage=productPage)
    console.log(this.productPage);
  }



  filter(prodcuctCategory:string){
    this.filterCategory = this.productList.filter((a:any) => {
      if(a.prodcuctCategory == prodcuctCategory || prodcuctCategory == ''){
        return a;
      }
    })
  }
  logout(){
    window.location.reload()
  }
 }

  