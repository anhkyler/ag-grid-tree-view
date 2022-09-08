import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from '../models/breadcrumb/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadCrumbItems = new BehaviorSubject<Breadcrumb[]>([]);
  breadCrumbs$ = this.breadCrumbItems.asObservable();
  private homeRoute:ActivatedRoute;
  constructor( private activatedRoute: ActivatedRoute, private router:Router) {
    this.homeRoute = activatedRoute;
    this.router.events.pipe(filter((e:any) => e instanceof NavigationEnd)).subscribe(
      (breadCrumbItems) => {
        
      }
    );
  }

  modifyBreadCrumbItems(snapshot:ActivatedRouteSnapshot, breadCrumbItem: Breadcrumb[]){
    if(snapshot?.routeConfig?.data && snapshot.routeConfig?.data.isBreadCrumbNotApplicable){
      return;
    }
    this.breadCrumbItems.forEach(bc => (bc.isActive = false));
  }
}
