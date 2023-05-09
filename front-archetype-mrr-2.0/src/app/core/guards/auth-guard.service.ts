import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeOnDestroy } from 'src/app/shared/classes/unsubscribe-on-destroy.class';
import { SecurityService } from '../services/security.service';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService extends UnsubscribeOnDestroy() implements CanActivate {
  public url: any;
  public return: any;
  public error: any;

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private activatedRouter: ActivatedRoute,
    private toastService: ToastService
  ) {
    super();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = window.location.href;
    const currentUserMrr = this.securityService.currentUserValue;
    const tokenJWT = route.queryParams['tokenJWT'];
    const token = route.queryParams['token'];
    const idmodulo = route.queryParams['modulo'];
    const idseccion = route.queryParams['seccion'] ? route.queryParams['seccion'] : route.queryParams['refer'];
    localStorage.setItem('modulo', idmodulo);
    if (!token) {
      if (currentUserMrr) {
        return true;
      } else {
        this.router.navigate(['/logout'], {
          skipLocationChange: true,
          queryParams: { modulo: idmodulo, seccion: idseccion }
        });
        this.toastService.showToasts('Token no válido', { classname: 'bg-danger text-light', delay: 3000 })
        return false;
      }
    } else {
      this.activatedRouter.queryParams
        .pipe(takeUntil(this['destroyed$']))
        .subscribe((params) => (this.return = params['return'] || 'medidas'));
      this.securityService
        .login(token)
        .pipe(takeUntil(this['destroyed$']))
        .subscribe(
          (data) => {
            const urlSection: string = this.url.split('seccion=')[1];
            //this.menuInfoService.setMenuInfo(urlSection);
            sessionStorage.setItem('tokenJWT', JSON.stringify(tokenJWT));
            this.router.navigate([urlSection], {
              skipLocationChange: true,
              queryParams: { modulo: idmodulo, seccion: idseccion }
            });
          },
          (error) => {
            this.error = error;
            console.log(this.error);
          }
        );
      return false;
    }
  }

}
