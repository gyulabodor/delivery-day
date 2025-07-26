import { Component } from '@angular/core';
import {MatCard, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'day-register-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle
  ],
  templateUrl: './day-register-form.component.html',
  styleUrl: './day-register-form.component.scss'
})
export class DayRegisterFormComponent {

}
