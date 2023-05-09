import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SidebarItem } from 'src/app/shared/models/sidebar-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input()
  listMenuItems: SidebarItem[];

  @Output()
  optionMenuSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  opcionMenuSeleccionada( optionMenuSelected: string ) {
    this.optionMenuSelected.emit(optionMenuSelected);
  }

}
