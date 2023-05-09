import { Component, OnInit } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { SecurityService } from 'src/app/core/services/security.service';
import {  ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-mrr-custom-error',
  templateUrl: './mrr-custom-error.component.html',
  styleUrls: ['./mrr-custom-error.component.scss']
})
export class MrrCustomErrorComponent implements OnInit {

  token: any;
  errorMessage: string = '';
  errorStatus: number;

  constructor(
    private securityService: SecurityService,
    private activatedRoute: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe( (pathParams: Params) => {
      this.errorMessage = pathParams['message'];
      this.errorStatus = pathParams['status'];
    });
  }

  routingHome() {
    localStorage.clear();
    const currentUserMrr = this.securityService.currentUserValue;
    this.token = JSON.parse(currentUserMrr.toString()).user.tokenCli;
    if (ENV.API.ENTORNO === 'LOCAL') {
      (window.location.href =
        window.location.protocol +
        '//' +
        window.location.hostname +
        ENV.API.BASE_FRONT +
        'coffee/' +
        '?token=' +
        this.token),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          responseType: 'text'
        };
    } else {
      (window.location.href =
        window.location.protocol +
        '//' +
        window.location.host +
        '/' +
        'coffee/' +
        '?token=' +
        this.token),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          responseType: 'text'
        };
    }
  }

}
