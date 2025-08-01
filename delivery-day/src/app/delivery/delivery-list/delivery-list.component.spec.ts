import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListComponent } from './delivery-list.component';

describe('DeliveryStatisticsTableComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
