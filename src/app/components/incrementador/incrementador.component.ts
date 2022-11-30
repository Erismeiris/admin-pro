import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(){
    this.btnClass = `btn ${ this.btnClass}`;
  }

 @Input() progress: number = 0;
 @Input() btnClass: string = 'btn-primary';

 @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  
  cambiarValor( value:number): 0 | 100 | any{
    

    if( this.progress >= 100 || value >= 100){
      this.valorSalida.emit(100)
      return this.progress = 100;
    }
    if (this.progress <0 && value < 0){
      this.valorSalida.emit(0)
      return this.progress = 0;
    }

    this.progress = this.progress + value;
    this.valorSalida.emit(this.progress)
    
    
  }

  onChange( nuevoValor: number){

    if( nuevoValor >= 100){
      this.progress = 100;
    }else if(nuevoValor <=0){
      this.progress = 0;
    }else{
    this.progress = nuevoValor;
    }
    this.valorSalida.emit(this.progress);

  }

 

}
