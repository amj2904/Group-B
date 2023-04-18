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
  grandTotal1:number=0;
  
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
   console.log("::::",this.paymentoption);
    let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    console.log("testing Ashwin",random);
  const userid=user.id;
 const date =new Date();
 console.log(date);
    const order:any={
      
      orderid:random,
      payment:this.paymentoption,
      date:date,
      userid:userid,
      products:this.products
    };
    console.log(order);
    //
    this.ordersService.addOrders(order).subscribe(res=>{
      console.log(res);
      if(res!=null){
        alert("Your order has been places successfully")
        this.router.navigate(['thankyou']);
      }
      else{
        console.log("Something went wrong");
      }
      
      console.log(this.paymentoption);
    })
   
  }
  paymentmethod(event:any){
    this.paymentoption=event.target.value;
    console.log(this.paymentoption);
  }


  }
  