import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mrr-logout',
  templateUrl: './mrr-logout.component.html',
  styleUrls: ['./mrr-logout.component.scss']
})
export class MrrLogoutComponent implements OnInit {

  public token: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
