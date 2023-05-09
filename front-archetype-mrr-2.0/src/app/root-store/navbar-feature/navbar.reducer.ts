import { createReducer, on } from '@ngrx/store';
import * as NavbarActions from './navbar.actions';
import { StoreItem } from 'src/app/shared/models/store-item.model';

export const initialState: StoreItem = {
    state: 'S',
    action: null,
    entity: 'navbar'
} 

export const navbarReducer = createReducer(
    initialState,
    on(NavbarActions.navigateOption, (state, {dtoItem}) => ({ state: dtoItem.state , action: dtoItem.action, entity: dtoItem.entity }))
);