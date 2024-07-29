import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanInterestRatesFormComponent } from './personal-loan-interest-rates-form.component';

describe('PersonalLoanInterestRatesFormComponent', () => {
  let component: PersonalLoanInterestRatesFormComponent;
  let fixture: ComponentFixture<PersonalLoanInterestRatesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalLoanInterestRatesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLoanInterestRatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
