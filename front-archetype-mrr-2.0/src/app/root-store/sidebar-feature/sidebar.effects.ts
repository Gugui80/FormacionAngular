import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MenuServiceService } from 'src/app/core/services/menu-service.service';

@Injectable()
export class SidebarEffects {

    loadSidebar$ = createEffect( () => this.sidebarActions$.pipe(
        ofType('[Sidebar component] Load sidebar'),
        mergeMap(() => this.menuService.getMenuItems()
            .pipe(
                map(sidebarOptions => ({ type: '[Sidebar component] Load success'})),
                catchError(() => of({ type: '[Sidebar component] Error load sidebar options' }))
            ))
        )
    );
    constructor(
        private sidebarActions$: Actions,
        private menuService: MenuServiceService
    ) {}
}