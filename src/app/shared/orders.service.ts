import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url="http://localhost:3000/orders";

  constructor(private _http:HttpClient) { }
  
  addOrders(data:any){
    
    return this._http.post<any>(this.url,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}