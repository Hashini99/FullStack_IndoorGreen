import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER_URL, ORDER_PAY_URL } from '../shared/constants/urls';
import { order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  create(order:order){
    return this.http.post<order>(ORDER_CREATE_URL, order);
  }

  getNewOrderForCurrentUser():Observable<order>{
    return this.http.get<order>(ORDER_NEW_FOR_CURRENT_USER_URL);
  }

  pay(order:order):Observable<string>{
    return this.http.post<string>(ORDER_PAY_URL,order);
  }


}
