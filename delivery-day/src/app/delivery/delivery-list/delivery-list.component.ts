import {Component, inject, OnInit} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {Observable} from "rxjs";
import {DeliveryDay} from "../delivery-day";
import {AsyncPipe, NgIf} from "@angular/common";
import {DeliveryService} from "../delivery.service";

@Component({
  selector: 'delivery-statistics-table',
  standalone: true,
  imports: [
    MatCard,
    MatTable,
    NgIf,
    AsyncPipe,
    MatColumnDef,
    MatHeaderRow,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './delivery-statistics-table.component.html',
  styleUrl: './delivery-statistics-table.component.scss'
})
export class DeliveryStatisticsTableComponent implements OnInit {
  dataSource$?: Observable<DeliveryDay[]>

  deliveryService = inject(DeliveryService);

  ngOnInit(): void {
      this.dataSource$ = this.deliveryService.getDeliveries$;
  }

  clickOnDelivery(id:number): void {
    
  }
  displayedColumns: string[] = ['date','time','shiftType'];
}
