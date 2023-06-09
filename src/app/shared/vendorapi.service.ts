import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorapiService {

  
  constructor(private http:HttpClient) { }
  postVendor(data:any){
    return this.http.post<any>("http://localhost:3000/vendorData",data)
    .pipe(map((res)=>{
      return res;
    }))

  }
  getVendor(){
    return this.http.get<any>("http://localhost:3000/vendorData")
    .pipe(map((res)=>{
      return res;
    }))

  }

  updateVendor(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/vendorData/"+id,data)
    .pipe(map((res)=>{
      return res;
    }))

  }
  deleteVendor(id:number){
    return this.http.delete<any>("http://localhost:3000/vendorData/"+id)
    .pipe(map((res)=>{
      return res;
    }))

  }
}
