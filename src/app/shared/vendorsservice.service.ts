import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorsserviceService {
  url="http://localhost:3000/vendors";

  constructor(private _http:HttpClient) { }

  getVendors(){
    return this._http.get<any>(this.url,).pipe(map((res:any)=>{
      return res;
      console.log(res);
    }))
  }
}
