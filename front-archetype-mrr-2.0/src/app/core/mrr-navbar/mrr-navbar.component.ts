import { Component, Input, Output, OnInit, EventEmitter  } from '@angular/core';
import { SidebarItem } from 'src/app/shared/models/sidebar-item.model';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { StoreItem } from 'src/app/shared/models/store-item.model';
import { navigateOption } from '../../root-store/navbar-feature/navbar.actions';

@Component({
  selector: 'app-mrr-navbar',
  templateUrl: './mrr-navbar.component.html',
  styleUrls: ['./mrr-navbar.component.scss']
})
export class MrrNavbarComponent implements OnInit {

  @Input()
  menuItem: SidebarItem;

  @Output()
  optionMenuSelected = new EventEmitter<string>();

  dtoItem: StoreItem;

  titleMenuText: string;

  constructor( 
    private router: Router,
    private store: Store<{ navbar: StoreItem }>
  ) {
    this.store.pipe(
      select('navbar')
    )
    .subscribe( val => {
    })
  }

  ngOnInit(): void {
    this.titleMenuText = '';
    if ( this.menuItem && this.menuItem.children ) {
      for ( let index = 0; index < this.menuItem.children.length; index++ ) {
        
        this.titleMenuText += this.menuItem.children[index].displayName;
        
        if ( index < this.menuItem.children.length -1 ) {
          this.titleMenuText += ' - ';
        }

      }
    }
  }

  menuItemSelected( menuItem: SidebarItem ) {
    this.dtoItem = { state: 'Selected', action: 'Click', entity: menuItem.displayName };
    this.store.dispatch( navigateOption({ dtoItem: this.dtoItem }) );

    if (menuItem.route) {
      this.router.navigate([menuItem.route]);
      this.optionMenuSelected.emit(menuItem.displayName);
    }
  }
}
