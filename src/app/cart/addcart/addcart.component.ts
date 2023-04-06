import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/shared/cartservice.service';
import { ProductapiService } from 'src/app/shared/productapi.service';
import { Productmodel } from 'src/app/model/productmodel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {

  constructor(private productpageService:ProductapiService,private activatedRoute: ActivatedRoute,
    private cartService :CartserviceService) { }
    public products : any []= [];
    public grandTotal! : number;

  ngOnInit(): void {
  this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;    
      const cartProduct={products:this.products,quantity:this.products}
     
      console.log("ngOnInit :"+JSON.stringify(cartProduct));
      this.products.forEach(element => {
       console.log(element.products)
     
       
       localStorage.setItem('cartObj',JSON.stringify(cartProduct));
      });
      this.grandTotal = this.cartService.getTotalPrice(cartProduct.products,cartProduct.quantity);
    console.log(" "+this.grandTotal);
    });
   
   }

   removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }



  }