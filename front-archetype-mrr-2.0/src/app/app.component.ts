import { Component } from '@angular/core';
import { SidebarItem } from './shared/models/sidebar-item.model';
import { BreadcrumbItem } from './shared/models/breadcrumb-item.model';
import { MenuServiceService } from 'src/app/core/services/menu-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { ToastService } from './core/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  opcionMenuSeleccionada: string;
  showToolbar: boolean = false;
  showSidebar: boolean = false;
  isExpanded: boolean = false;

  listBreadcrumbItems: BreadcrumbItem[] = [{label: '', url: ''}];
  listSidebarItems: SidebarItem[] = [{displayName: '', disabled: true, iconName: ''}];

  listMenuItems: SidebarItem[] = [
    {
      displayName: 'Plan de recuperación',
      disabled: false,
      iconName: '',
      route: 'null',
      children: [
        {
          displayName: 'COMPONENTES',
          disabled: false,
          iconName: 'home',
          route: '/plan-recuperacion/componentes'
        },
        {
          displayName: 'MEDIDAS',
          disabled: false,
          iconName: 'home',
          route: '/plan-recuperacion/medidas'
        }
      ]
    },
    {
      displayName: 'Seguimiento del plan',
      disabled: false,
      iconName: '',
      route: 'null',
      children: [
        {
          displayName: 'SEGUIMIENTO DE COMPONENTES',
          disabled: false,
          iconName: 'home',
          route: '/seguimiento/componentes'
        },
        {
          displayName: 'SEGUIMIENTO DE MEDIDAS',
          disabled: false,
          iconName: 'home',
          route: '/seguimiento/medidas'
        },
        {
          displayName: 'SEGUIMIENTO DE H/O CID',
          disabled: false,
          iconName: 'home',
          route: '/seguimiento/hitos-objetivos'
        }
      ]
    },
    {
      displayName: 'Pagos',
      disabled: false,
      iconName: '',
      route: 'null',
      children: [
        {
          displayName: 'SOLICITUDES DE PAGO',
          disabled: false,
          iconName: 'home',
          route: '/solicitudes/pagos'
        }
      ]
    },
    {
      displayName: 'Planificación y gestión',
      disabled: false,
      iconName: '',
      route: 'null',
      children: [
        {
          displayName: 'PROYECTOS',
          disabled: false,
          iconName: 'home',
          route: '/planificacion/proyectos'
        },
        {
          displayName: 'SUBPROYECTOS',
          disabled: false,
          iconName: 'home',
          route: '/planificacion/subproyectos'
        },
        {
          displayName: 'ACTUACIONES',
          disabled: false,
          iconName: 'home',
          route: '/planificacion/actuaciones'
        }
      ]
    },
    {
      displayName: 'Seguridad',
      disabled: false,
      iconName: '',
      route: 'null',
      children: [
        {
          displayName: 'CARGA DE PERFILES',
          disabled: false,
          iconName: 'home',
          route: '/seguridad/carga-perfiles'
        },
        {
          displayName: 'APROBACIÓN DE PERFILADOS',
          disabled: false,
          iconName: 'home',
          route: '/seguridad/aprobacion-perfilado'
        },
        {
          displayName: 'SOLICITUDES DE RESPONSABLE',
          disabled: false,
          iconName: 'home',
          route: '/seguridad/solicitudes-responsable'
        }
      ]
    },
    {
      displayName: 'Carga de ficheros',
      disabled: false,
      iconName: '',
      route: 'null',
      children: [
        {
          displayName: 'CARGA DE PROYECTOS/SUBPROYECTOS',
          disabled: false,
          iconName: 'home',
          route: '/ficheros/carga-proyectos-subproyectos'
        },
        {
          displayName: 'DECLARACIONES DE EJECUCIÓN',
          disabled: false,
          iconName: 'home',
          route: '/ficheros/declaracion-ejecucion'
        },
        {
          displayName: 'PROGRESO DE INDICADORES',
          disabled: false,
          iconName: 'home',
          route: '/ficheros/indicadores'
        }
      ]
    },
    {
      displayName: 'Administración MRR',
      disabled: false,
      iconName: '',
      route: 'null',
      children: [
        {
          displayName: 'PREASIGNACIÓN DE USUARIOS',
          disabled: false,
          iconName: 'home',
          route: '/administracion/usuarios'
        }
      ]
    }
  ];

  constructor (
    private menuService: MenuServiceService,
    private router: Router,
    public toastService: ToastService
  ) {
    //Capturamos los eventos de navegación a una URL determinada, cuando se invocan en la barra de búsqueda del navegador.
    this.router.events.subscribe( val => {
      if ( val instanceof NavigationEnd ) {
        
        const actualizarSidebar = (val.url !== '/') ? val.url.split('/')[2] : '';
        
        if ( this.validarUrlDeNavegacion(actualizarSidebar) ) {
          const menuCoffe: string = this.opcionMenuCoffe(val.url.split('/')[1]);
          //this.procesarOpcionMenu(actualizarSidebar.toUpperCase());
          this.procesarOpcionMenu(menuCoffe);
          this.actualizarMigasdePan(actualizarSidebar.charAt(0).toUpperCase() + actualizarSidebar.slice(1));
          this.toogleShowToolbar('other');
        } else {
          this.toogleShowToolbar('welcome');
        }
      }
    });
  }

  procesarOpcionMenu( opcionMenuCoffe: string ): void {
    this.opcionMenuSeleccionada = opcionMenuCoffe;
      this.menuService.getMenuItems().subscribe(
        listMenuItems => {
          const provisionalSidebarList = listMenuItems.filter(elementFilter => elementFilter.displayName === opcionMenuCoffe);

          if( provisionalSidebarList && provisionalSidebarList.length && provisionalSidebarList.length > 0 ) {
            this.listSidebarItems = provisionalSidebarList;
          }
        }

      );
  }

  expandirContraerSidebar( isExpandedSidebar: boolean ) {
    this.isExpanded = isExpandedSidebar;
  }

  private actualizarMigasdePan( opcionMenuSeleccionada: string ): void {
    this.menuService.getBreadcrumbsItems().subscribe(
      listItems => {
        this.listBreadcrumbItems = listItems.filter(elementFilter => elementFilter.label === opcionMenuSeleccionada);
      });
  }

  private toogleShowToolbar( vistaSeleccionada: string ): void {
    this.showToolbar = vistaSeleccionada !== 'welcome' ? true : false;
    this.isExpanded = vistaSeleccionada !== 'welcome' ? true : false;
  }

  private validarUrlDeNavegacion( searchPath: string ): boolean {
    let validateUrl: boolean = false;
    
    this.listMenuItems.forEach(sideBarElement => {
      sideBarElement.children?.filter( routeElement => {
        if ( routeElement.route?.split('/')[2] === searchPath ) {
          validateUrl = true;
        }
      });
    });

    return validateUrl;
  }

  private opcionMenuCoffe( urlNavegacion: string ): string {
    let opcionMenuCoffe: string;
    switch (urlNavegacion) {
      case "plan-recuperacion":
        opcionMenuCoffe = "PLAN DE RECUPERACIÓN"
        break;
      
      case "planificacion":
        opcionMenuCoffe = "PLANIFICACIÓN Y GESTIÓN"
        break;

      default:
        opcionMenuCoffe = ''
        break;
    }

    return opcionMenuCoffe;
  }

  /*
  renderApplicationContainer( opcionMenuSeleccionada: string ): void {
    
  }*/
    /*this.listBreadcrumbItems = [
      {label: 'Plan de recuperación', url: '/plan-recuperacion'},
      {label: 'Medidas', url: '/plan-recuperacion/medidas'},
    ];*/
}
