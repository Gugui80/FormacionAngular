import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { SidebarItem } from 'src/app/shared/models/sidebar-item.model';
import { Router } from '@angular/router';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Store, select } from '@ngrx/store';
import { StoreItem } from 'src/app/shared/models/store-item.model';
import { selectOption } from 'src/app/root-store/sidebar-feature/sidebar.actions';

@Component({
  selector: 'app-mrr-sidebar',
  templateUrl: './mrr-sidebar.component.html',
  styleUrls: ['./mrr-sidebar.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ])
]
})
export class MrrSidebarComponent implements OnInit {

  expanded: boolean = false;

  @HostBinding('attr.aria-expanded')
  ariaExpanded = this.expanded;

  @Input()
  isMenuExpanded: boolean = true;

  @Input()
  menuItemSelected: string;

  @Input()
  opcionMenu: SidebarItem;

  @Input()
  depth: number;

  dtoItem: StoreItem;

  constructor(
    public router: Router,
    private store: Store<{ sidebar: StoreItem }>
  ) {
    this.store.pipe(
      select('sidebar')
    );

    if ( this.depth === undefined ) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
    //this.store.dispatch({ type: '[Sidebar component] Load sidebar' })

    const menuItemActive = this.router.url.split('/')[2];
    if (this.opcionMenu.displayName === menuItemActive.toUpperCase()) {
      this.expanded = true;
    }
  }

  isExpanded( optionMenuSelected: SidebarItem ): void {
    if (optionMenuSelected.children && optionMenuSelected.children.length) {
      this.expanded = !this.expanded;
    }
    this.optionSidebarSelected(optionMenuSelected);
  }

  optionSidebarSelected( optionMenuSelected: SidebarItem ): void {
    this.dtoItem = { state: 'Selected', action: 'Select sidebar option', entity: optionMenuSelected.displayName }
    this.store.dispatch( selectOption({ dtoItem: this.dtoItem }) );

    if (optionMenuSelected.route) {
      this.router.navigate([optionMenuSelected.route]);
    }
  }
}
