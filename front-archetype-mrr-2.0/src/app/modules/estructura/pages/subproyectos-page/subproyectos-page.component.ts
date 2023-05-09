import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subproyectos-page',
  templateUrl: './subproyectos-page.component.html',
  styleUrls: ['./subproyectos-page.component.scss']
})
export class SubproyectosPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe( pathParams => {
    });
  }

}
