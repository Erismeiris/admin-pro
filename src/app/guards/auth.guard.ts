import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { tap } from 'rxjs/operators';

import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor( private usuarioService: UsuariosService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
 return this.usuarioService.validarToken()
 .pipe(
   tap(estAuntenticado => {
    if(!estAuntenticado){
      this.router.navigateByUrl('/login');
    }
   })
 );
  }
  
}
