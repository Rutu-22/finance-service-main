import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss']
})
export class EmiCalculatorComponent {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  @Input() emi: number;
  @Input() totalInterest: number;
  @Input() totalRepayment: number;
  constructor(private router: Router) {}
 
  ngOnInit() {
    this.router.navigate(['/emi-calculator/home-loan']);
  }
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
