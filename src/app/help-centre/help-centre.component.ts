import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisputeServiceService } from '../shared/dispute-service.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-help-centre',
  templateUrl: './help-centre.component.html',
  styleUrls: ['./help-centre.component.css']
})
export class HelpCentreComponent implements OnInit, OnDestroy {
    orderData: any;
    errorMessage: string;
    orderNumber: string;
    helpcentreform = new FormGroup({
    id: new FormControl(0),
    orderno: new FormControl('',[Validators.required]),
    productdetails: new FormControl('',[Validators.required]),
    problemtype: new FormControl('',[Validators.required]),
    descriptions: new FormControl('',[Validators.required, Validators.nullValidator, Validators.minLength(10)])
    })
    message:any;
  constructor(private httpClient: HttpClient, private disputeServiceService: DisputeServiceService, 
        private dataService: DataService) { }

  get orderno() {
    return this.helpcentreform.get("orderno");
  }

  get productdetails() {
    return this.helpcentreform.get("productdetails");
  }

   get descriptions() {
    return this.helpcentreform.get("descriptions");
  }




  ngOnInit(): void {
    if (this.disputeServiceService.problemObject) {
      this.helpcentreform.setValue(this.disputeServiceService.problemObject);
      
      
    }
  

  }

  

  onSubmit() {
    this.httpClient.post("http://localhost:3000/HelpCentre", this.helpcentreform.value).subscribe(sub => {
      this.message = (sub as any).message;
    }
    );
  }

  /*
onSubmit() {
    this.httpClient.get("http://localhost:3000/HelpCentre", this.helpcentreform.value).subscribe(sub =>
      {(existingData: any) => {
        // If data already exists, update it
        if (existingData) {
          this.httpClient.put('http://localhost:3000/HelpCentre', this.helpcentreform).subscribe(
            (response: any) => {
              console.log(response);
            },
            (error: any) => {
              console.log(error);
            }
          );
        }
        // Otherwise, create a new file and add the data
        else {
          this.httpClient.post('path/to/your/json/file.json', this.helpcentreform).subscribe(
            (response: any) => {
              console.log(response);
            },
            (error: any) => {
              console.log(error);
            }
          );
        }
      },
      (error: any) => {
        console.log(error);
      }
     } );
  } */

  resetForm() {
    this.helpcentreform.reset();
    this.disputeServiceService.resetObject();
  }

  ngOnDestroy(): void {
    this.disputeServiceService.resetObject();
  }

  fetchOrder() {
    this.dataService.getOrderByOrderNumber(this.orderNumber).subscribe(
      (data) => {
        this.orderData = data;
        this.errorMessage = '';
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Error fetching order data';
      }
    );
  }

}
