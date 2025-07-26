import {inject, Injectable} from '@angular/core';


import {HttpClient} from "@angular/common/http";
import {DeliveryDay} from "./delivery-day";


@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private http =  inject(HttpClient)

  getDeliveries$ = this.http.get<DeliveryDay[]>('http://localhost:3000/deliveries')

}
