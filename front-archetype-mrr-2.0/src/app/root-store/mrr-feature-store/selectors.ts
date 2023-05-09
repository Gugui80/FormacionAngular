import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { StoreItem } from 'src/app/shared/models/store-item.model';
import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading ? state.isLoading : false;

export const selectMrrFeatureState: MemoizedSelector<object, State> = createFeatureSelector<State>('mrrFeatureStore');

export const selectAllMrrFeatureItems: (state: object) => StoreItem[] = featureAdapter.getSelectors(selectMrrFeatureState).selectAll;

export const selectMyFeatureById = (id: string) =>
  createSelector(
    this.selectAllMrrFeatureItems,
    (allMyFeatures: StoreItem[]) => {
      if (allMyFeatures) {
        return allMyFeatures.find(p => p.id === id);
      } else {
        return null;
      }
    }
  );

export const selectMrrFeatureError: MemoizedSelector<object,any> = createSelector(selectMrrFeatureState, getError);

export const selectMrrFeatureIsLoading: MemoizedSelector<object, boolean> = createSelector(selectMrrFeatureState, getIsLoading);