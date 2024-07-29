import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAmortizationTableComponent } from './loan-amortization-table.component';

describe('LoanAmortizationTableComponent', () => {
  let component: LoanAmortizationTableComponent;
  let fixture: ComponentFixture<LoanAmortizationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAmortizationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAmortizationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
