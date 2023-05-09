import { createAction, createActionGroup, props } from '@ngrx/store';
import { StoreItem } from 'src/app/shared/models/store-item.model';

export const selectOption = createAction(
    '[Sidebar component] Select  sidebar option',
    props<{dtoItem: StoreItem}>()
);