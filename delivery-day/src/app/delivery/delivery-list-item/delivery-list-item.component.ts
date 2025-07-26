import {Component, Input, OnInit} from '@angular/core';
import {DeliveryDay} from "../delivery-day";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {ErrorCardComponent} from "../../errors/error-card/error-card.component";

@Component({
  selector: 'delivery-list-item',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    NgIf,
    ErrorCardComponent
  ],
  templateUrl: './delivery-list-item.component.html',
  styleUrl: './delivery-list-item.component.scss'
})
export class DeliveryListItemComponent implements OnInit {
  @Input() deliveryInput?: DeliveryDay;


  ngOnInit(): void {

  }
}
