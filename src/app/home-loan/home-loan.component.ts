import { Component } from '@angular/core';
import { LoanAmortizationService } from '../loan-amortization.service';

@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.scss']
})
export class HomeLoanComponent {
  loanAmount: number = 500000;
  interestRate: number = 8.5;
  loanTenure: number = 180;
  emi: number;
  totalInterest: number;
  totalRepayment: number;
  amortizationData: any;
  isYearlyView: boolean = true;

  constructor(private loanAmortizationService: LoanAmortizationService) {}
  ngOnInit() {
    this.calculateEMI(); 
  }
  calculateEMI() {
    const monthlyInterestRate = (this.interestRate / 12) / 100;
    const numberOfMonths = this.loanTenure;
    const numerator = this.loanAmount * monthlyInterestRate;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths);

    this.emi = numerator / denominator;
    this.totalInterest = this.emi * numberOfMonths - this.loanAmount;
    this.totalRepayment = this.emi * numberOfMonths;
    this.amortizationData = this.loanAmortizationService.calculateAmortization(
      this.loanAmount,
      this.interestRate,
      this.loanTenure
    );
    this.isYearlyView = true;
  }

  toggleView() {
    this.isYearlyView = !this.isYearlyView;
  }
}
