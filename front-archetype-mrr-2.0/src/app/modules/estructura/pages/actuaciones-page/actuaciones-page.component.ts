import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actuaciones-page',
  templateUrl: './actuaciones-page.component.html',
  styleUrls: ['./actuaciones-page.component.scss']
})
export class ActuacionesPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe( pathParams => {
    })
  }

}
