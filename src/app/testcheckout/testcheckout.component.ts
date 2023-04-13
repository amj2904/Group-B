import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcheckout',
  templateUrl: './testcheckout.component.html',
  styleUrls: ['./testcheckout.component.css']
})
export class TestcheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    let cartitm=(localStorage.getItem('product'));
    console.log("Ashwin"+cartitm);
 

  }


}
