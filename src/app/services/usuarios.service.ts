import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { LoginForm } from '../interfaces/login-form.interface';
import { RegisterForm } from '../interfaces/register-form.interface';


const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public auth2: any; 

  constructor(private http: HttpClient, 
              private router: Router,
              private ngZone: NgZone ) {
               
       this.googleInit();

      }

  googleInit(){
    return new Promise( resolve => {
      gapi.load('auth2', ()=> {
        this.auth2 = gapi.auth2.init({
          client_id: '252288679148-jm81on61cpoujsvuptrvmgts0hgcbhu0.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin', 
        })
      })
    })
  }


  logout(): void{
    localStorage.removeItem('token');

    this.auth2.signOut().then( ()=> {
      this.ngZone.run( ()=>{
        this.router.navigateByUrl('/login');
      })
    })

    this.router.navigateByUrl('/login');
  }

  validarToken(): Observable<boolean>{
 const token = localStorage.getItem('token') || '';

 return  this.http.get(`${base_url}/login/renew`, {
   headers:{
     'x-token': token
   }
 }).pipe(
   tap( (resp:any) => {
      localStorage.setItem('token', resp.token)
   }),
   map( resp => true),
   catchError( error => of(false) )
 );
}


  crearUsuario(formData: RegisterForm) {

    return this.http.post(`${base_url}/usuarios`, formData)

  }

  login( formData: LoginForm ) {
    
    return this.http.post(`${ base_url }/login`, formData )
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token )
                  })
                );

  }

  loginGoogle( token:string ) {
    
    return this.http.post(`${ base_url }/login/google`, { token } )
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token )
                  })
                );

  }



 
}
