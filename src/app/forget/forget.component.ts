import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {


  email: string;

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {


    this.loginForm = this.formbuilder.group({
      email: [''],


    })
  }


    login(){
      this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
        const user = res.find((a:any)=>{
          console.log(res);

          if( a.email === this.loginForm.value.email){
            alert("Your Password is - "+a.password);
            this.loginForm.reset();

            this.router.navigate(["login"]);


          }

            //   else{
            //   alert("user not found");
            //  }
          });
        }
        )


}}
