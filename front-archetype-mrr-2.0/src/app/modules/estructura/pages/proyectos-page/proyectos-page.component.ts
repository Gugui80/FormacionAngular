import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos-page',
  templateUrl: './proyectos-page.component.html',
  styleUrls: ['./proyectos-page.component.scss']
})
export class ProyectosPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe( pathParams => {
    });
  }

}
