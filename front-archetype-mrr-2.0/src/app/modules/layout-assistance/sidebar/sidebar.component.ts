import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SidebarNavigationService } from 'src/app/core/services/sidebar-navigation.service';
import { map, Observable, shareReplay } from 'rxjs';
import { SidebarItem } from 'src/app/shared/models/sidebar-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLandscape$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 600px)'])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  @ViewChild('appDrawer', {static : false}) appDrawer: ElementRef;
  @Output()
  contractOrExpandSidebaButtonClicked = new EventEmitter<boolean>();

  @Input()
  showSidebar: boolean = false;
  
  @Input()
  menuItemSelected: string;

  @Input()
  listSidebarItems: SidebarItem[];

  @Input()
  isMenuExpanded: boolean;
  
  isExpanded = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidebarNavigationService: SidebarNavigationService
  ) { }

  ngOnInit(): void {
  }

  toggleSidenav(): void {
    this.breakpointObserver.observe([
      '(min-width: 600px)'
    ]).subscribe( result => {
      if ( result.matches ) {
        //this.sidebarNavigationService.openNav();
        this.isExpanded = !this.isExpanded;
      } else {
        this.isExpanded = !this.isExpanded;
      }
    });
    this.contractOrExpandSidebaButtonClicked.emit(this.isExpanded);
  }

  ngAfterViewInit(): void {
    this.appDrawer = this.appDrawer;
  }

}
