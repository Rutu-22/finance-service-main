import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-loan-interest-rates-form',
  templateUrl: './personal-loan-interest-rates-form.component.html',
  styleUrls: ['./personal-loan-interest-rates-form.component.scss']
})
export class PersonalLoanInterestRatesFormComponent {
  formData: any = {};

  submitForm() {
    console.log('Form data:', this.formData);
  }
}
