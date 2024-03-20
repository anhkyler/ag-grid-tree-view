import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { NavbarMeuComponent } from './navbar-meu/navbar-meu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RegisterSmallBusinessComponent } from './small-business/register-small-business/register-small-business.component'
import { ForcastContractingComponent } from './small-business/forcast-contracting/forcast-contracting.component';
import { SmallBusinessResourceComponent } from './small-business/small-business-resource/small-business-resource.component';
import { DesignAndConstructionComponent } from './real-estate/design-and-construction/design-and-construction.component';
import { FacilityManagementComponent } from './real-estate/facility-management/facility-management.component';
import { OurPropertiesComponent } from './real-estate/our-properties/our-properties.component';
import { GeneralContactInformationComponent } from './contact/general-contact-information/general-contact-information.component'
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
    DownloadButtonRendererComponent,
    NavbarMeuComponent,
    FooterMenuComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    RegisterSmallBusinessComponent,
    ForcastContractingComponent,
    SmallBusinessResourceComponent,
    FacilityManagementComponent,
    OurPropertiesComponent,
    DesignAndConstructionComponent,
    GeneralContactInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})

export class AppModule { }
