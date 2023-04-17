import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
 
  title = 'Eshop';
  constructor(){
    let userobj= {id:1,name:"ashwin",email:"ashwin@gmail.com",address:"Mulund west"}
 localStorage.setItem("userdata",JSON.stringify(userobj));
  }
}
