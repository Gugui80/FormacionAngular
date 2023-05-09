import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medidas-page',
  templateUrl: './medidas-page.component.html',
  styleUrls: ['./medidas-page.component.scss']
})
export class MedidasPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe( pathParams => {
    });
  }

}
