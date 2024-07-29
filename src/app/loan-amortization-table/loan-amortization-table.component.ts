
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loan-amortization-table',
  templateUrl: './loan-amortization-table.component.html',
  styleUrls: ['./loan-amortization-table.component.scss'],
})
export class LoanAmortizationTableComponent {
  @Input() amortizationSchedule: any[];
  @Input() isYearlyView: boolean;
}
