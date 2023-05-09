import { createAction, createActionGroup, props } from '@ngrx/store';
import { StoreItem } from 'src/app/shared/models/store-item.model';


export const addEntity = createAction(
    '[Toolbar component] Create',
    props<{dtoItem: StoreItem}>());
export const editEntity = createAction(
    '[Toolbar component] Edit',
    props<{dtoItem: StoreItem}>());
export const deleteEntity = createAction(
    '[Toolbar component] Delete',
    props<{dtoItem: StoreItem}>());