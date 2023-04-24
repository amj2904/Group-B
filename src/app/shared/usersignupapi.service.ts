import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersignupapiService {
  urlSignUpData="http://localhost:3000/signupUsers";

  constructor(private _http:HttpClient) { }


  getSignUpData(){
    return this._http.get<any>(this.urlSignUpData,).pipe(map((res:any)=>{
      return res;
    }))
  }
}