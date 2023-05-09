import { createReducer, on } from '@ngrx/store';
import * as SidebarActions from './sidebar.actions';
import { StoreItem } from 'src/app/shared/models/store-item.model';

export const initialState: StoreItem = {
    state: 'S',
    action: null,
    entity: 'sidebar'
};

export const sidebarReducer = createReducer(
    initialState,
    on(SidebarActions.selectOption, (state, { dtoItem }) => ({ state: dtoItem.state , action: dtoItem.action, entity: dtoItem.entity }))
);