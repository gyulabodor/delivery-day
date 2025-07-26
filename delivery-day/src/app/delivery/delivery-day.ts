import {DeliveryShiftType} from "./delivery-shift-type.enum";

export interface DeliveryDay {
  id: number;
  date: string;
  zone: string;
  startingTime: string;
  endingTime: string;
  kmMeterAtStart: number;
  kmMeterAtEnd: number;
  totalEarnings: number;
  totalDelivery: number;
  shiftType: DeliveryShiftType
}
