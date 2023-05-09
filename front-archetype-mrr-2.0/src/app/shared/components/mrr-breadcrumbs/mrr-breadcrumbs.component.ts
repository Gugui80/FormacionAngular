import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BreadcrumbItem } from '../../models/breadcrumb-item.model';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-mrr-breadcrumbs',
  templateUrl: './mrr-breadcrumbs.component.html',
  styleUrls: ['./mrr-breadcrumbs.component.scss']
})
export class MrrBreadcrumbsComponent implements OnInit {
  
  @Input()
  listBreadcrumbItems: BreadcrumbItem[];

  @Input()
  showBreadCrumbs: boolean = false;

  breadcrumbs$ = this.router.events.pipe(
    filter( event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map( event => this.buildBreadcrumb(this.activatedRoute.root) )
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( pathParams => {
    });
  }

  private buildBreadcrumb( route: ActivatedRoute, url: string = '', breadcrumbs: Array<BreadcrumbItem> = []): Array<BreadcrumbItem> {
    const label = (route.routeConfig && route.routeConfig.data) ? route.routeConfig.data['breadcrumbData'] : '';

    const path = (route.routeConfig && route.routeConfig.path) ? route.routeConfig.path : '';

    const nextUrl = `${url}${path}/`;
    const breadCrumb: BreadcrumbItem = {
      label: label, 
      url: nextUrl
    };

    const newBreadcrumbs = [...breadcrumbs, breadCrumb];

    return newBreadcrumbs;
  }
}
