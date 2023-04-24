import { Component, OnInit } from '@angular/core';
import { UsersignupapiService } from '../shared/usersignupapi.service';

@Component({
  selector: 'app-usersignupdata',
  templateUrl: './usersignupdata.component.html',
  styleUrls: ['./usersignupdata.component.css']
})
export class UsersignupdataComponent implements OnInit {
  data!:any;
  totalLength: any; //page
  page: number = 1;//page
  totalNumberOfUser:any;
  constructor(private api:UsersignupapiService) { }

  ngOnInit(): void {
    this.api.getSignUpData().subscribe(res => {
      this.data = res;
      this.totalNumberOfUser=res.length;
      console.log(this.totalNumberOfUser);
  })


  }

}
