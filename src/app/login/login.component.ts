import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup

  constructor(private FormBuilder : FormBuilder,private http: HttpClient , private router :Router)  { }

  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email:[''],
      password:['']
    })
  }
  login()
{
  this.http.get<any>("http://localhost:3000/signupUsers")
  .subscribe(res=>{
    console.log(res);
   const user= res.find((a:any)=>
   {
    //testing
    localStorage.setItem("userdata",JSON.stringify(a));
  
    return a.email=== this.loginForm.value.email &&  a.password=== this.loginForm.value.password
    

   });

   
   if (user){
    console.log(res);
    alert("Login Success");
    this.loginForm.reset();
    this.router.navigate(['productpage'])
     }
    else if(this.loginForm.value.email==="Admin" && this.loginForm.value.password==="Admin"){
      this.router.navigate(['addproduct']);
     }
     
     else{
      alert("user not found");
    }

   },err=>{
    alert("something went wrong")
   }


   )
}




}
