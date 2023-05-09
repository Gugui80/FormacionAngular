import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input()
  showSidebar: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe( pathParams => {
    });
  }
}
