import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { SwitchAccountComponent } from './switch-account/switch-account.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DownloadButtonRendererComponent} from './home/download-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumComponent,
    HomeComponent,
    ReportsComponent,
    DailyReportsComponent,
    MonthlyReportsComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    SwitchAccountComponent,
    DownloadButtonRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
