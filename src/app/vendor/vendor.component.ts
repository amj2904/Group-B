import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { VendorModel } from './vendor.model';
import { VendorapiService } from '../shared/vendorapi.service';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  formValue !:FormGroup;
  vendorModelObj:VendorModel=new VendorModel();
  vendorData !:any;
  showAdd !:boolean;
  showUpdate !:boolean;
firstName: any;

  constructor(private formBuilder:FormBuilder,private api:VendorapiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      address:['',Validators.required]
    })
    this.getAllVendors();
  }

  clickAddVendor(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
postVendorDetails(){
  this.vendorModelObj.firstName=this.formValue.value.firstName;
  this.vendorModelObj.lastName=this.formValue.value.lasName;
  this.vendorModelObj.email=this.formValue.value.email;
  this.vendorModelObj.mobile=this.formValue.value.mobile;
  this.vendorModelObj.address=this.formValue.value.address;
  this.api.postVendor(this.vendorModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Vendor Added Successfully");
    let ref=document.getElementById("cancel");
    ref?.click();
    this.formValue.reset();
    this.getAllVendors();
    
  },
  err=>{
    alert("something wents wrong");
  }
  )

}
getAllVendors(){
  this.api.getVendor()
  .subscribe(res=>{
    this.vendorData=res;
    console.log(res);
  })
}

deleteVendor(row:any){
  this.api.deleteVendor(row.id)
  .subscribe(res=>{
    alert("Vendor Deleted");
    console.log("deleteed");
    this.getAllVendors();
  })
}

onEdit(row : any){
  this.showAdd=false;
    this.showUpdate=true;
  this.vendorModelObj.id=row.id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['address'].setValue(row.address);
}
updateVendorDetails(){
  this.vendorModelObj.firstName=this.formValue.value.firstName;
  this.vendorModelObj.lastName=this.formValue.value.lasName;
  this.vendorModelObj.email=this.formValue.value.email;
  this.vendorModelObj.mobile=this.formValue.value.mobile;
  this.vendorModelObj.address=this.formValue.value.address;
  this.api.updateVendor(this.vendorModelObj,this.vendorModelObj.id)
  .subscribe(res=>{
    alert("updated successfully");
    let ref=document.getElementById("cancel");
    ref?.click();
    this.formValue.reset();
    this.getAllVendors();
  })

}
}
