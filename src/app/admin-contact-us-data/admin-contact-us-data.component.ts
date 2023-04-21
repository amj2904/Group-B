import { Component, OnInit } from '@angular/core';
import { ContactusdataService } from '../shared/contactusdata.service';


@Component({
  selector: 'app-admin-contact-us-data',
  templateUrl: './admin-contact-us-data.component.html',
  styleUrls: ['./admin-contact-us-data.component.css']
})
export class AdminContactUsDataComponent implements OnInit {
  data!:any;
  totalLength: any; //page
  page: number = 1;//page

  constructor(private api:ContactusdataService) { }

  ngOnInit(): void {
    this.api.getSignUp().subscribe(res => {
      this.data = res;
  })


  }

}
