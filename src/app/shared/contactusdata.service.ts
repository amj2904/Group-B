import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactusdataService {
  urlSignUp="http://localhost:3000/contactus";

  constructor(private _http:HttpClient) { }


  getSignUp(){
    return this._http.get<any>(this.urlSignUp,).pipe(map((res:any)=>{
      return res;
    }))
  }
}
