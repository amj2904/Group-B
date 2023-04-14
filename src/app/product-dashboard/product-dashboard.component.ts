import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Productmodel } from '../model/productmodel';
import { ProductapiService } from '../shared/productapi.service';
import { VendorsserviceService } from '../shared/vendorsservice.service';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  productModelObj:Productmodel=new Productmodel;
  formValue!: FormGroup;
  allProductData!: any;
  allProductVendors!:any;
  showAdd!: boolean;
  showUpdate!: boolean;
  prodcuctCategory!:any;
  p:number=1;//page
  totalLength: any; //page

  constructor(private formBuilder: FormBuilder, private api: ProductapiService, private vendor:VendorsserviceService) { }
  productModel:Productmodel[]=[];

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      productName: ['',Validators.required],
      productDescription: ['',Validators.required],
      imageUrl: ['',Validators.required],
      unitPrice: ['',Validators.required],
      Vendor: ['',Validators.required],
      prodcuctCategory:['',Validators.required]
     
    })
    this.getAllData();
    this.getAllVendors();
    
  }

  clickAddProduct() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  addProduct() {
    console.log(this.formValue.value);
    this.productModelObj.productName = this.formValue.value.productName;
    this.productModelObj.productDescription = this.formValue.value.productDescription;
    this.productModelObj.imageUrl = this.formValue.value.imageUrl;
    this.productModelObj.unitPrice = this.formValue.value.unitPrice;
    this.productModelObj.Vendor=this.formValue.value.Vendor;
    this.productModelObj.prodcuctCategory=this.formValue.value.prodcuctCategory;
   
    this.api.postProduct(this.productModelObj).subscribe(res => {
      console.log(res);

      console.log("DataSaved Succesfully")
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();
      

    },
      err => {
        alert("something went wrong")
      })

  }
  getAllData() {
    this.api.getProduct().subscribe(res => {
      this.allProductData = res;
      this.totalLength = res.length;//page

     
     
    })

  }
  deleteProduct(data: any) {
    this.api.deleteProduct(data.id).subscribe(res => {
      alert("Product Record Deleted");
      this.getAllData();
    })
  }
  onEditProduct(data: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.productId = data.id;
    this.formValue.controls['productName'].setValue(data.productName);
    this.formValue.controls['productDescription'].setValue(data.productDescription);
    this.formValue.controls['imageUrl'].setValue(data.imageUrl);
    this.formValue.controls['unitPrice'].setValue(data.unitPrice);
    this.formValue.controls['Vendor'].setValue(data.Vendor);
    this.formValue.controls['prodcuctCategory'].setValue(data.prodcuctCategory);
    

  }
  updateProduct() {
    console.log(this.formValue.value);
    this.productModelObj.productName = this.formValue.value.productName;
    this.productModelObj.productDescription = this.formValue.value.productDescription;
    this.productModelObj.imageUrl = this.formValue.value.imageUrl;
    this.productModelObj.unitPrice = this.formValue.value.unitPrice;
    this.productModelObj.Vendor = this.formValue.value.Vendor;//
    this.productModelObj.prodcuctCategory = this.formValue.value.prodcuctCategory;//
    
    this.api.updateProduct(this.productModelObj, this.productModelObj.productId).subscribe(res => {
      alert("Product Record Updated!");
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();

    })
  }

  getAllVendors() {
    this.vendor.getVendors().subscribe(res => {
      this.allProductVendors = res;

     console.log(this.allProductVendors);
     
    })
}

key:string='id';
reverse:boolean=false;
sort(key: string){
  this.key=key
  this.reverse=!this.reverse;
}
}