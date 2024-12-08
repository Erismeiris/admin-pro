import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [    
    // Your styles here
    `
    .col {
      text-align: left;
      background-color: #f2f2f2;
      border: 1px solid black;
      border-radius:5%;
      padding: 10px;
      color: black;
    }
  `
    
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  public users: any;

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {

      if(usuarios) {
        this.users = usuarios;
      } 
      
    })

  

    // const promesa = new Promise( ( resolve, reject ) => {

    //   if ( false ) {
    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }


    // });

    // promesa
    //   .then( (mensaje) => {
    //     console.log( mensaje );
    //   })
    //   .catch( error => console.log('Error en mi promesa', error ) );

    // console.log('Fin del Init');

  }

  getUsuarios() {

    return new Promise( resolve => {

      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => resolve( body.data ) );

    });

  }

}
