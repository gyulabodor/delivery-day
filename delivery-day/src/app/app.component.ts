import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {NavBarComponent} from "./layout/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'delivery-day';
}
