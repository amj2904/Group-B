import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../shared/cartservice.service';
import { HttpClient } from '@angular/common/http';
import { OrdersService } from '../shared/orders.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-testcheckout',
  templateUrl: './testcheckout.component.html',
  styleUrls: ['./testcheckout.component.css']
})
export class TestcheckoutComponent implements OnInit {
  getUser:any;
  products:any[]=[];
  userData:any[]=[];

  grandTotal1:number=0;
  shippinfAddress:any;
  
  
  paymentoption:string='';

  constructor(private cartService:CartserviceService,private ordersService:OrdersService,private router:Router) { }

  ngOnInit(): void {
    
     this.getUser=JSON.parse(localStorage.getItem('userdata'));
     this.getProducts();
     this.grandTotal();
 

  }
  getProducts(){
    this.cartService.getProductList().subscribe(products=>{
      this.products=products;
      console.log(this.products);
    })

  }
  grandTotal(){
    this.grandTotal1=this.cartService.getTotalPrice();
  }

  onSubmit(form){
    let user=JSON.parse(localStorage.getItem('userdata'));
  
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    
  const userid=user.id;
 const date =new Date();

    const order:any={
      
     orderid:random,
     userid:userid,
     username:user.fullname,
     email:user.email,
     shifingAddress:this.getUser.address,
      payment:this.paymentoption,
      date:date,
      
      products:this.products,
      grandTotal:this.grandTotal1

    };
    console.log(order);
    //
    this.ordersService.addOrders(order).subscribe(res=>{
      console.log(res);
      if(res!=null){
        alert("Your order has been places successfully")
        this.router.navigate(['homepage']);
      }
      else{
        console.log("Something went wrong");
      }
      
     
    })
   
  }
  paymentmethod(event:any){
    this.paymentoption=event.target.value;
    console.log(this.paymentoption);
  }


  }
  