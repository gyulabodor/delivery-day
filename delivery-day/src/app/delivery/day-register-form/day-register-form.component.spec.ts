import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRegisterFormComponent } from './day-register-form.component';

describe('DayRegisterFormComponent', () => {
  let component: DayRegisterFormComponent;
  let fixture: ComponentFixture<DayRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayRegisterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
