import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoanAmortizationService {
  constructor() {}

  calculateAmortization(
    loanAmount: number,
    annualInterestRate: number,
    loanTenure: number
  ): any {
    const monthlyInterestRate = (annualInterestRate / 12) / 100;
    const numberOfPayments = loanTenure;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    let balance = loanAmount;
    const amortizationSchedule = [];
    let currentYear = new Date().getFullYear();
    let isYearlyView = true;

    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = balance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;

      if (month % 12 === 0) {
        currentYear++;
      }

      if (isYearlyView) {
        if (month === 1 || month % 12 === 1) {
          amortizationSchedule.push({
            Year: currentYear,
            Principal: principalPayment,
            Interest: interestPayment,
            TotalPayment: monthlyPayment,
            Balance: balance,
            LoanPaidToDate: ((loanAmount - balance) / loanAmount) * 100,
          });
        }
      } else {
        amortizationSchedule.push({
          Month: month,
          Principal: principalPayment,
          Interest: interestPayment,
          TotalPayment: monthlyPayment,
          Balance: balance,
          LoanPaidToDate: ((loanAmount - balance) / loanAmount) * 100,
        });
      }
    }

    return { amortizationSchedule, isYearlyView };
  }
}
