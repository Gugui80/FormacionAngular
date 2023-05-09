import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as ENV } from '../../../environments/environment';
import { User } from '../../shared/models/user.model';

const EXPIRE_TIME_IN_MILLISECOND = Number(ENV.SECURITY.EXPIRE_TIME_IN_MINUTES) * 60000;

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUserMrr: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUserMrr')!)
    );
    this.currentUserMrr = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(token: string): Observable<any> {
    const body = new HttpParams().set('token', token);
    let contexto =
      window.location.protocol +
      '//' +
      window.location.host +
      '/' +
      ENV.SECURITY.WS_LOGIN.LOGIN;
    if (ENV.API.ENTORNO === 'LOCAL') {
      contexto =
        window.location.protocol +
        '//' +
        window.location.hostname +
        ENV.API.BASE +
        ENV.SECURITY.WS_LOGIN.LOGIN;
    }
    return this.http
      .post(contexto, body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text'
      })
      .pipe(
        map((user) => {
          sessionStorage.setItem('currentUserMrr', JSON.stringify(user));
          this.currentUserSubject = new BehaviorSubject<User>(
            JSON.parse(sessionStorage.getItem('currentUserMrr')!)
          );
          return user;
        })
      );
  }

  loginExterno(token: string): Observable<any> {
    const body = new HttpParams().set('token', token);
    let contexto =
      window.location.protocol +
      '//' +
      window.location.host +
      '/' +
      ENV.SECURITY.WS_LOGIN.LOGIN_CONTEX_HOME;
    if (ENV.API.ENTORNO === 'LOCAL') {
      contexto =
        window.location.protocol +
        '//' +
        window.location.hostname +
        ENV.API.BASE +
        ENV.SECURITY.WS_LOGIN.LOGIN;
    }
    return this.http
      .post(contexto, body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text'
      })
      .pipe(
        map((user) => {
          sessionStorage.setItem('currentUserMrr', JSON.stringify(user));
          this.currentUserSubject = new BehaviorSubject<User>(
            JSON.parse(sessionStorage.getItem('currentUserMrr')!)
          );
          return user;
        }) 
      );
  }


  loginSgife(token: string): Observable<any> {
    const body = new HttpParams().set('token', token);
    let contexto =
      window.location.protocol +
      '//' +
      window.location.host +
      '/' +
      ENV.SECURITY.WS_LOGIN.LOGIN_CONTEX_SGIFE;
    if (ENV.API.ENTORNO === 'LOCAL') {
      contexto =
        window.location.protocol +
        '//' +
        window.location.hostname +
        ENV.API.BASE +
        ENV.SECURITY.WS_LOGIN.LOGIN_CONTEX_SGIFE;
    }
    return this.http
      .post(contexto, body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text'
      })
      .pipe(
        map((user) => {
          sessionStorage.setItem('currentUserSgife', JSON.stringify(user));
          return user;
        })
      );
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.removeItem('currentUserMrr');
    //this.currentUserSubject.next(null);
    this.router.navigate(['/logout'], {
      skipLocationChange: true
    })
  }

  logoutGen(param: string): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/logout/'+param], { skipLocationChange : true });
  }
}
