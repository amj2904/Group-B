import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisputeServiceService } from '../shared/dispute-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dispute-list',
  templateUrl: './dispute-list.component.html',
  styleUrls: ['./dispute-list.component.css']
})
export class DisputeListComponent implements OnInit {

  disputeList: any;

  constructor(private httpClient: HttpClient, private disputeServiceService: DisputeServiceService, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:3000/HelpCentre").subscribe(res => {
      this.disputeList = res;
    });
  }

  updateProblem(item: any) {
    this.disputeServiceService.setObject(item);
    this.router.navigate(["helpcentre"]);
  }


 

  
  /*deleteProblem(id: any) {
    this.httpClient.delete("http://localhost:3000/HelpCentre" + id).subscribe(res =>{
     if (((res as any).message).includes("sucess")) {
       this.disputeList = this.disputeList.filter((item: { id: any; }) => item.id != id);
     }
    });
  }*/

  deleteProblem(id: any){
    this.httpClient.delete("http://localhost:3000/HelpCentre/" + id).subscribe(Response =>{
        this.disputeList = this.disputeList.filter((item: { id: any; }) => item.id !== id);
        this.cd.detectChanges()
     });

  }


}
