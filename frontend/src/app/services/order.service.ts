import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { create_order, new_order, payment_url } from '../shared/constants/urls';
import { order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  create(order:order){
    return this.http.post<order>(create_order, order);
  }

  getNewOrderForCurrentUser():Observable<order>{
    return this.http.get<order>(new_order);
  }

  pay(order:order):Observable<string>{
    return this.http.post<string>(payment_url,order);
  }


}
