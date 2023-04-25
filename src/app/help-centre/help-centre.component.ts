import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisputeServiceService } from '../shared/dispute-service.service';
import { OrdersService } from '../shared/orders.service';


@Component({
  selector: 'app-help-centre',
  templateUrl: './help-centre.component.html',
  styleUrls: ['./help-centre.component.css']
})
export class HelpCentreComponent implements OnInit, OnDestroy {
    helpcentreform = new FormGroup({
    id: new FormControl(0),
    orderno: new FormControl('',[Validators.required]),
    productdetails: new FormControl('',[Validators.required]),
    problemtype: new FormControl('',[Validators.required]),
    descriptions: new FormControl('',[Validators.required, Validators.nullValidator, Validators.minLength(10)]),
    });

    order: any[] = [];
    message:any;

  constructor(private httpClient: HttpClient, private disputeServiceService: DisputeServiceService) { }

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

  // onSubmit() {
  //   this.httpClient.post("http://localhost:3000/HelpCentre", this.helpcentreform.value).subscribe(sub => {
  //     this.message = (sub as any).message;
  //     const orderno = this.helpcentreform.value.orderno;
      
  //   }
  //   );


  // }
  onSubmit() {

    const orderNo = this.helpcentreform.value.orderno;

    this.httpClient.get('http://localhost:3000/orders').subscribe((data: any[]) => {
      const isValid = data.find((orders) => orders.orderid === parseInt(orderNo));
      if (isValid) {
        // Proceed with submitting the form data
        this.httpClient.post('http://localhost:3000/HelpCentre', this.helpcentreform.value).subscribe((response: any) => {
          this.message = response.message;
        });
      } else {
        // Display an error message to the user
        alert('Invalid order number. Please enter a valid order number.');
      }
    
    });




    // this.httpClient.get("http://localhost:3000/HelpCentre").subscribe((data: any[]) => {
    //   const existingTicket = data.find((ticket) => ticket.orderno === orderNo);
    //   if (existingTicket) {
    //     this.httpClient.put(`http://localhost:3000/HelpCentre/${existingTicket.id}`, this.helpcentreform.value).subscribe((response: any) => {
    //       this.message = response.message;
    //     });
    //   } else {
    //     this.httpClient.post("http://localhost:3000/HelpCentre", this.helpcentreform.value).subscribe((response: any) => {
    //       this.message = response.message;
    //     });
    //   }
    // });
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

 

}
