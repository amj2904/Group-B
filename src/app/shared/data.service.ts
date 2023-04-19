import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ordersURl = ".../db.json"

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get<any>(this.ordersURl);
  }

  getOrderByOrderNumber(orderNumber: string): Observable<any> {
    return this.http.get<any>(this.ordersURl).pipe(
      map((data) => {
        return data.orders.filter((order) => order.orderNumber === orderNumber)[0];
      })
    );
  }
}
