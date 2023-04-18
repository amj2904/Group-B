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
    public products : any= [];
    public grandTotal! : number;

  ngOnInit(): void {
  this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;    
      const cartProduct={products:this.products,quantity:this.products}
     
      // console.log("ngOnInit :"+JSON.stringify(cartProduct));
      this.products.forEach(element => {
      //  console.log(element.products)
     
       
       localStorage.setItem('cartObj',JSON.stringify(cartProduct));
      });
      // this.grandTotal = this.cartService.getTotalPrice(cartProduct.products,cartProduct.quantity);
      this.grandTotal = this.cartService.getTotalPrice();
    // console.log(" "+this.grandTotal);
    });
   
    // console.log("Tesing "+this.cartService);
   }

   removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }


   // Create a function for Increase the Quantity of product
   increaseQuantity(item:any,quantity:number){
     for(let i=0;i<this.products.length;i++)
     {
      console.log(this.products[i].product)
      if(this.products[i].product.productId === item.product.productId){
      this.products[i].product.quantity = quantity+1 ;
      this.products[i].product.total = item.product.total + item.product.productPrice;
    }
     }  
     this.grandTotal=this.cartService.getTotalPrice();    
    }

    // Create a function for Decrease the Quantity of product
    decreaseQuantity(item:any,quantity:number){
      for(let i=0;i<this.products.length;i++)
      {
        if(this.products[i].product.productId === item.product.productId ){
          console.log(this.products)
          if(quantity>1){
            this.products[i].product.total = item.product.total - item.product.productPrice;
          }
          if(quantity !=1)
          this.products[i].product.quantity = quantity-1;
            }    
      }  
      this.grandTotal=this.cartService.getTotalPrice();  
    }


  }