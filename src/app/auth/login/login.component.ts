import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    remember: [false]
  });


  constructor(private router: Router,
    private fb: UntypedFormBuilder,
    private usuarioService: UsuariosService,
    private ngZone: NgZone) { }



  ngOnInit(): void {
    this.renderButton();

  }


  login() {

    this.usuarioService.login(this.loginForm.value)
      .subscribe(resp => {
        
        if ( this.loginForm.get('remember')?.value ){ 
          localStorage.setItem('email', this.loginForm.get('email')?.value );
        } else {
          localStorage.removeItem('email');
        }
       // Navegar al Dashboard
       this.router.navigateByUrl('/'); 

      }, (err) => {
        // Si sucede un error se mostratá usando el switte error
        Swal.fire('Error', err.error.msg, 'error');
      })
  }
  ///////////////// Login with google ////////////////
  
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });

    this.startApp();
  }
  
  async startApp() {
    
    await this.usuarioService.googleInit();
    this.auth2 = this.usuarioService.auth2;

    this.attachSignin( document.getElementById('my-signin2') );
    
  };

  attachSignin(element:any) {
    
    this.auth2.attachClickHandler( element, {},
        (googleUser:any) => {
            const id_token = googleUser.getAuthResponse().id_token;
            // console.log(id_token);
            this.usuarioService.loginGoogle( id_token )
              .subscribe( resp => {
                // Navegar al Dashboard
                this.ngZone.run( () => {
                  this.router.navigateByUrl('/');
                })
              });

        }, (error:any) => {
            alert(JSON.stringify(error, undefined, 2));
        });
  }
 
}
