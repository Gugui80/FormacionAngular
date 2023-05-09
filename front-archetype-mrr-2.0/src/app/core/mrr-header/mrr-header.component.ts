import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { SidebarItem } from 'src/app/shared/models/sidebar-item.model';

@Component({
  selector: 'app-mrr-header',
  templateUrl: './mrr-header.component.html',
  styleUrls: ['./mrr-header.component.scss']
})
export class MrrHeaderComponent implements OnInit {

  @Input()
  listMenuItems: SidebarItem[];

  @Output()
  optionMenuSelected = new EventEmitter<string>();

  public fondos = null;
  public fondo: any = null;
  public idfondo: string = '7';
  public images = ['hlogo1.url', 'hlogo2.url', 'entorno'];
  public detail1: string[] = [];
  public observerLogo1: any;
  public observerLogo2: any;
  public observerEntorno: any;
  public icono: any;
  public ruta_imagen = ENV.API.BASE_IMAGEN;
  public usuario: string = 'EXPF0162';
  //public items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.observerEntorno= { nombre:'BETA MRR 2.0' };
    this.fondo = 'Mecanismo de recuperación y resiliencia';
    this.observerLogo1 = { nombre: '../assets/MHAC.Gob.png' };
    this.observerLogo2 = { nombre: '../assets/LogoCoFFEE.png' };
    this.icono = '../assets/R.png';
  }

  opcionMenuSeleccionada( optionMenuSelected: string ) {
    this.optionMenuSelected.emit(optionMenuSelected);
  }
  
}
