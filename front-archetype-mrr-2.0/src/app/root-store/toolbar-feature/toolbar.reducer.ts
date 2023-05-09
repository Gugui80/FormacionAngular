import { createReducer, on } from '@ngrx/store';
import * as ToolbarActions from './toolbar.actions';
import { StoreItem } from 'src/app/shared/models/store-item.model';

export const initialState: StoreItem = {
    state: 'S',
    action: null,
    entity: null
};

export const toolbarReducer = createReducer(
    initialState,
    on(ToolbarActions.addEntity, (state, { dtoItem }) => ({ state: dtoItem.state , action: dtoItem.action, entity: dtoItem.entity })),
    on(ToolbarActions.editEntity, (state, { dtoItem }) => ({ state: dtoItem.state , action: dtoItem.action, entity: dtoItem.entity })),
    on(ToolbarActions.deleteEntity, (state, { dtoItem }) => ({ state: dtoItem.state , action: dtoItem.action, entity: dtoItem.entity }))
);