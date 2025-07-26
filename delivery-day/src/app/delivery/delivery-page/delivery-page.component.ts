import { Component } from '@angular/core';
import {
  DayRegisterFormComponent
} from "../day-register-form/day-register-form.component";
import {
  DeliveryListComponent
} from "../delivery-list/delivery-list.component";
import {
  MatTab,
  MatTabGroup,
  MatTabHeader,
  MatTabNavPanel
} from "@angular/material/tabs";

@Component({
  selector: 'delivery-page',
  standalone: true,
  imports: [
    DayRegisterFormComponent,
    DeliveryListComponent,
    MatTabGroup,
    MatTab,
    MatTabNavPanel,
    MatTabHeader
  ],
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.scss'
})
export class DeliveryPageComponent {

}
