
import { UserLoginComponent } from './pages/login/containers/user-login/user-login.component';
import { LoginLayoutComponent } from './layout/login/login-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard/dashboard-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { PersonalLoanInterestRatesFormComponent } from './personal-loan-interest-rates-form/personal-loan-interest-rates-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'emi-calculator' },
  {
    path: 'emi-calculator',
    component: EmiCalculatorComponent,
    children: [
      { path: 'home-loan', component: HomeLoanComponent },
      { path: 'car-loan', component: CarLoanComponent },
      { path: 'personal-loan', component: PersonalLoanComponent },
    ],
  },
  {
    path: 'personal-loan-interest-rates',
    component: PersonalLoanInterestRatesFormComponent,
  }, 
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [{ path: '', component: UserLoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
