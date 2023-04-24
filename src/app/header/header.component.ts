import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../shared/productapi.service';
import { Productmodel } from '../model/productmodel';
import { CartserviceService } from '../shared/cartservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm : string = '';
 public fullname:any;
 
  
  
  
  
  constructor(private cartService:CartserviceService,private productpageService:ProductapiService,private router:Router) { }
  productPage:Productmodel[]=[];
  ngOnInit(): void {this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
      
      let getUser=JSON.parse(localStorage.getItem('userdata'));
      
      this.fullname=getUser.fullname;
     console.log("ashwin",this.fullname );

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
  
 
  logoutUser(){
   
    localStorage.removeItem("cartObj");
    localStorage.removeItem("userdata");
    this.router.navigate(['productpage']);
    window.location.reload();


  }
  loggedIn(){
    
    return !!JSON.parse(localStorage.getItem('userdata'));
    
  }
   

}


