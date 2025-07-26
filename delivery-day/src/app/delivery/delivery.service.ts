import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DeliveryDay} from "./delivery-day";
import {of} from "rxjs";
import {DeliveryShiftType} from "./delivery-shift-type.enum";

export const testDeliveries: DeliveryDay[] = [
  {
    id: 1,
    date: '2025-07-07',
    startingTime: '13:05',
    endingTime: '15:34',
    shiftType: DeliveryShiftType.WORK_NOW,
    odoMeterAtStart: 90550,
    odoMeterAtEnd: 90600,
    totalEarnings: 6500,
    totalDelivery: 4
  },
  {
    id: 2,
    date: '2025-07-08',
    startingTime: '12:05',
    endingTime: '14:34',
    shiftType: DeliveryShiftType.WORK_NOW,
    odoMeterAtStart: 90700,
    odoMeterAtEnd: 90750,
    totalEarnings: 6900,
    totalDelivery: 5
  }, {
    id: 3,
    date: '2025-07-11',
    startingTime: '10:00',
    endingTime: '12:00',
    shiftType: DeliveryShiftType.PRE_BOOKING,
    odoMeterAtStart: 90831,
    odoMeterAtEnd: 90870,
    totalEarnings: 12000,
    totalDelivery: 7
  },
]

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  //
  // constructor(private http: HttpClient) {
  // }

  //getDeliveries$ = this.http.get<DeliveryDay[]>('https://api/delivery/list')
  getDeliveries$ = of(testDeliveries);
}
