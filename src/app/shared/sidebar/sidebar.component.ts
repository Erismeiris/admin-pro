import { Component, OnInit } from '@angular/core';
import { SideBarService } from 'src/app/services/side-bar.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private sidebarSerice: SideBarService,
              private usuarioServices: UsuariosService) {

    this.menuItems = sidebarSerice.menu;

   
   }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioServices.logout();
  }

}
