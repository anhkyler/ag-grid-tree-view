import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { HomeComponent } from './home/home.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    {path: '**', redirectTo:'not-found'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
