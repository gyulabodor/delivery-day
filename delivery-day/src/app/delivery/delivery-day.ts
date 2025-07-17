import {DeliveryShiftType} from "./delivery-shift-type.enum";

export interface DeliveryDay {
  id: number;
  date: string;
  startingTime: string;
  endingTime: string;
  odoMeterAtStart: number;
  odoMeterAtEnd: number;
  totalEarnings: number;
  totalDelivery: number;
  shiftType: DeliveryShiftType
}
