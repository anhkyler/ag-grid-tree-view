import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BreadCrumb} from './breadcrumb';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

}
