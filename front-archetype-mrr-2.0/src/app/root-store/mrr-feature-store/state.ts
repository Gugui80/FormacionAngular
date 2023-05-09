import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { StoreItem } from '../../shared/models/store-item.model';

export const featureAdapter: EntityAdapter<StoreItem> = createEntityAdapter<
StoreItem
>({
  selectId: model => model.id,
  sortComparer: (a: StoreItem, b: StoreItem): number =>
    b.someDate.toString().localeCompare(a.someDate.toString())
});

export interface State extends EntityState<StoreItem> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});