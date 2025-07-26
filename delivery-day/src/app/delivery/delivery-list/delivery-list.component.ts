import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DeliveryDay} from "../delivery-day";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {DeliveryService} from "../delivery.service";
import {
  DeliveryListItemComponent
} from "../delivery-list-item/delivery-list-item.component";

@Component({
  selector: 'delivery-list',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    DeliveryListItemComponent,
  ],
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.scss'
})
export class DeliveryListComponent implements OnInit {
  deliveryList$?: Observable<DeliveryDay[]>

  deliveryService = inject(DeliveryService);

  ngOnInit(): void {
    this.deliveryList$ = this.deliveryService.getDeliveries$;
  }
}
