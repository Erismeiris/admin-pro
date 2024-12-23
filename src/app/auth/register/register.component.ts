import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'
  ]
})
export class RegisterComponent{

  

public formSubmitted = false;


  public registerForm = this.fb.group({
    nombre: ['Erismeiris', Validators.required],
    email: ['erismeidis@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
    password2: ['123456', Validators.required],
    terminos: [ false, Validators.required]
  },{
    Validators: this.passwordsIguales('password','password2')
  } ); 

  constructor( private fb: UntypedFormBuilder,
               private usuarioService: UsuariosService,
               private router: Router) { }

  crearUsuario(){
    this.formSubmitted = true;
   
    if( this.registerForm.invalid){
      return ;
    }

    //Realizar el posteo de los valores que vienen desde el formulario
    this.usuarioService.crearUsuario(this.registerForm.value)
        .subscribe( resp => {
           
          // Navegar al Dashboard
           this.router.navigateByUrl('/');

        }, (err) => {
          // Si hay error, utilicemos el swittalert el cual está importado ya
          Swal.fire('Error', err.error.msg, 'error' )
        });
    }
    



  //Mostar si campo no válido, solo nombre y email
  campoNoValido(campo:string):boolean{
    if( this.registerForm.get(campo)?.invalid && this.formSubmitted){
      return true
    }else {
     return false
    }
  }

  contrasenasNoValidas(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if((pass1 !== pass2) && this.formSubmitted){
      return true;
    }else{
      return false;
    }
  }


  //Mostrar si se han aceptado los términos
  aceptaTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
    
  }

  passwordsIguales(pass1Name:string, pass2Name:string){
      return (formGroup: UntypedFormGroup) =>{
          const pass1Control = formGroup.get(pass1Name);
          const pass2Control = formGroup.get(pass2Name);


          if(pass1Control?.value === pass2Control?.value){
            pass2Control?.setErrors(null)
          }else{
            pass2Control?.setErrors({noEsIgual: true})

          }
      }

  }

   

}
