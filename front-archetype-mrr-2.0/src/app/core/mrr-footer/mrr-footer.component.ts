import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mrr-footer',
  templateUrl: './mrr-footer.component.html',
  styleUrls: ['./mrr-footer.component.scss']
})
export class MrrFooterComponent implements OnInit {

  versionMrr: string = require('package.json').version;
  fechaActualizacion: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
