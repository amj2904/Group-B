import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisputeServiceService {

  problemObject: any;

  constructor() { }

  setObject(item: any) {
    this.problemObject = item;
  }

  resetObject() {
    this.problemObject = null;
  }

}
