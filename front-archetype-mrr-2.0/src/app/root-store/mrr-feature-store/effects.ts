import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MenuServiceService } from 'src/app/core/services/menu-service.service';

@Injectable()
export class MrrFeatureStoreEffects {
  constructor(
    private actions$: Actions,
    private menuService: MenuServiceService ) {}

  loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    ofType('[Mrr Feature] Load Request'),
    mergeMap(() => this.menuService.getMenuItems()
        .pipe(
            map(menuItems => ({ type: '[MRR API] Get menu Items Success', payload: menuItems })),
            catchError(() => of({ type: '[MRR API] Menu Items Loaded Error' }))
        )
    )
  ));

}

/*@Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.dataService.getItems().pipe(
        map(
          items =>
            new featureActions.LoadSuccessAction({
              items
            })
        ),
        catchError(error =>
          observableOf(new featureActions.LoadFailureAction({ error }))
        )
      )
    )
  );*/