import { createAction, createActionGroup, props } from '@ngrx/store';
import { StoreItem } from 'src/app/shared/models/store-item.model';

export const navigateOption = createAction(
    '[Navbar component] Navigate to option',
    props<{dtoItem: StoreItem}>()
);