import { Action } from '@ngrx/store';
import { StoreItem } from '../../shared/models/store-item.model';

export enum ActionTypes {
  LOAD_REQUEST = '[Mrr Feature] Load Request',
  LOAD_FAILURE = '[Mrr Feature] Load Failure',
  LOAD_SUCCESS = '[Mrr Feature] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: StoreItem[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;