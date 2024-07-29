import { Component } from '@angular/core';

@Component({
  selector: 'app-car-loan',
  templateUrl: './car-loan.component.html',
  styleUrls: ['./car-loan.component.scss']
})
export class CarLoanComponent {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  emi: number;
  totalInterest: number;
  totalRepayment: number;
 
  calculateEMI() {
    const monthlyInterestRate = (this.interestRate / 12) / 100;
    const numberOfMonths = this.loanTenure;
    const numerator = this.loanAmount * monthlyInterestRate;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths);

    this.emi = numerator / denominator;
    this.totalInterest = this.emi * numberOfMonths - this.loanAmount;
    this.totalRepayment = this.emi * numberOfMonths;
  }
}
