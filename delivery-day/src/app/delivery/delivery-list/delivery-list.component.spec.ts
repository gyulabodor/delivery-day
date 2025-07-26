import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryStatisticsTableComponent } from './delivery-statistics-table.component';

describe('DeliveryStatisticsTableComponent', () => {
  let component: DeliveryStatisticsTableComponent;
  let fixture: ComponentFixture<DeliveryStatisticsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryStatisticsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryStatisticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
