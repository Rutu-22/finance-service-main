import { AppCommonModule } from './common/app.common.module';
import { LoaderInterceptor } from './common/interceptors/loaderInterceptor';
import { LoginLayoutModule } from './layout/login/login-layout.module';
import { DashboardLayoutModule } from './layout/dashboard/dashboard-layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WorkStationMqttService } from './common/services/workstation.mqtt.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { LoanAmortizationTableComponent } from './loan-amortization-table/loan-amortization-table.component';
import { PersonalLoanInterestRatesFormComponent } from './personal-loan-interest-rates-form/personal-loan-interest-rates-form.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, EmiCalculatorComponent, HomeLoanComponent, CarLoanComponent, PersonalLoanComponent, LoanAmortizationTableComponent, PersonalLoanInterestRatesFormComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppCommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardLayoutModule,
    LoginLayoutModule,
    FontAwesomeModule,
    NgbDropdownModule,
    HttpClientModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: WorkStationMqttService, useClass: WorkStationMqttService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
