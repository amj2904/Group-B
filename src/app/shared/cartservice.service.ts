import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Productmodel } from '../model/productmodel';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private base_url="http://localhost:3000/posts";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private httpClient:HttpClient) { }

  getProductPage():Observable<Productmodel []>{
    return this.httpClient.get<Productmodel []>(this.base_url);
    
  }

  public cartItemList : any[] =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  

 
  getProductList(){
    return this.productList.asObservable();
  }

  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
addtoCart(product:any){
  const itemIndex = this.cartItemList.findIndex(item => item.productId === product.productId);
  const _product={product:product};

  if (itemIndex === -1) {
    this.cartItemList.push(_product);
    }


  // const _product={product:product,quantity:pQuantity};
  //console.log("addtocart : " +JSON.stringify(_product));
  // this.cartItemList.push(_product);
  this.productList.next(this.cartItemList.slice(0));
  //console.log("cartlist............"+JSON.stringify(this.cartItemList));
  // this.getTotalPrice();
}


  // this method get total price by adding all the products total from cart
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      const q:number=parseInt(a.product.quantity);
      grandTotal+=a.product.unitPrice*q;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    console.log(product)
    this.cartItemList.map((a:any, index:any)=>{
      console.log(product)
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
