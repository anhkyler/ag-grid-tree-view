import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { HomeComponent } from './home/home.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterSmallBusinessComponent } from './small-business/register-small-business/register-small-business.component';
import { ForcastContractingComponent } from './small-business/forcast-contracting/forcast-contracting.component';
import { SmallBusinessResourceComponent } from './small-business/small-business-resource/small-business-resource.component';
import { DesignAndConstructionComponent } from './real-estate/design-and-construction/design-and-construction.component';
import { FacilityManagementComponent } from './real-estate/facility-management/facility-management.component';
import { OurPropertiesComponent } from './real-estate/our-properties/our-properties.component';
import { GeneralContactInformationComponent } from './contact/general-contact-information/general-contact-information.component';

const routes: Routes = [
    {path:'',redirectTo:"/home", pathMatch:"full"},//set the default page when loading application

    {path:'reports',component:ReportsComponent},
    {path:'home',component:HomeComponent},
    {path:'dailyreports',component:DailyReportsComponent},
    {path: 'dailyreports/:id/:name', component: DailyReportsComponent},
    {path:'monthlyreports',component:MonthlyReportsComponent},
    {path:'account',component:AccountComponent},
    {path:'login',component:LoginComponent},
    {path: 'not-found', component: PageNotFoundComponent},

    {path:'registerandsmallbusiness', component: RegisterSmallBusinessComponent},
    {path:'forcastcontracting', component: ForcastContractingComponent},
    {path:'smallbusinessresource', component: SmallBusinessResourceComponent},


    {path:'designandconstruction', component: DesignAndConstructionComponent},
    {path:'facility', component: FacilityManagementComponent},
    {path:'ourproperties', component: OurPropertiesComponent},
    {path:'generalcontactinformation',component:GeneralContactInformationComponent},
    {path: '**', redirectTo:'not-found'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
