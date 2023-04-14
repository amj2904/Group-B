import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  contactUs!: FormGroup

  constructor(private formBuilder: FormBuilder, private _http: HttpClient) { }

  ngOnInit(): void {
    this.contactUs = this.formBuilder.group({
      name: [''],
      email: [''],
      
    })
  }
  signUpData() {
    this._http.post<any>("http://localhost:3000/contactus", this.contactUs.value).subscribe(res => {
      alert("Data Saved Successful")
      this.contactUs.reset();
      
    }, err => {
      alert("Somthing went wrong")

    })
  }


  }

  
  
  

