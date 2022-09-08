import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { HomeComponent } from './home/home.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
    {path:'',redirectTo:"/home", pathMatch:"full"},
    {path:'home',component:HomeComponent},
    {path:'reports',component:ReportsComponent},
    {path:'dailyreports',component:DailyReportsComponent},
    {path:'monthlyreports',component:MonthlyReportsComponent},
    {path:'account',component:AccountComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
