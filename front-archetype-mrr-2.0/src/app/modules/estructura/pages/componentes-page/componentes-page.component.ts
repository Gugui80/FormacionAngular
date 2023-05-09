import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componentes-page',
  templateUrl: './componentes-page.component.html',
  styleUrls: ['./componentes-page.component.scss']
})
export class ComponentesPageComponent implements OnInit {

  @Output()
  navigationData: any = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe( pathParams => {
      this.navigationData.emit(pathParams);
    });
  }

}
