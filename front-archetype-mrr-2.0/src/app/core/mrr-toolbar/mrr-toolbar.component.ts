import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addEntity, editEntity, deleteEntity } from '../../root-store/toolbar-feature/toolbar.actions';
import { StoreItem } from 'src/app/shared/models/store-item.model';

@Component({
  selector: 'app-mrr-toolbar',
  templateUrl: './mrr-toolbar.component.html',
  styleUrls: ['./mrr-toolbar.component.scss']
})
export class MrrToolbarComponent implements OnInit {

  toolbar$: Observable<StoreItem>;
  dtoItem: StoreItem;
  toolbar: StoreItem;

  @Input()
  allowedActions: boolean;

  constructor( 
    private store: Store<{ toolbar: StoreItem }>
    ) {
    this.store.pipe(
        select('toolbar')
      )
      .subscribe(val => {
        this.toolbar = val
      });
    
  }

  ngOnInit(): void {
  }

  add() {
    this.dtoItem = { state: 'N', action: 'add', entity: 'subproyecto' };
    this.store.dispatch( addEntity({dtoItem: this.dtoItem}) );
  }

  edit() {
    this.dtoItem = { state: 'M', action: 'edit', entity: 'subproyecto' };
    this.store.dispatch( editEntity({dtoItem: this.dtoItem}) );
  }

  delete() {
    this.dtoItem = { state: 'D', action: 'delete', entity: 'subproyecto' };
    this.store.dispatch( deleteEntity({dtoItem: this.dtoItem}) );
  }

}
