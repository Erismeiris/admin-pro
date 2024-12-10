import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
    `.contenedor {
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      };
      `,
    `     
     .digital-watch {
      font-family: 'Courier New', Courier, monospace;
      font-size: 4em;
      color: #333;
      background-color: #f0f0f0;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: inline-block;
  };`

  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs!: Subscription;


  constructor() {   

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('Subs:', valor ),
    //   error => console.warn('Error:', error ),
    //   () => console.info('Obs terminado')
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe( console.log ) 
    this.startClock();

  }
  
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(100)
            .pipe(
              take(10), // Función del Take es tomar cantidad de valores emitidos
              map( valor => valor + 1), // 0 => 1 Función del Map le aplica cambiuos a cada valor emitido
              filter( valor => ( valor % 2 === 0 ) ? true : false ), // 1 => 2 Función del Filter filtra los valores emitidos
            );
  }


  retornaObservable(): Observable<number> {
    let i = -1;
    
    return new Observable<number>( observer => {
      
      const intervalo = setInterval( () => {
        
        i++;
        observer.next(i);

        if ( i === 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i === 2 ) {
          observer.error('i llego al valor de 2');
        }

      }, 1000 )

    });

  }

  startClock(): void {
    setInterval(() => {
      const now = new Date();
      const hours = this.padZero(now.getHours());
      const minutes = this.padZero(now.getMinutes());
      const seconds = this.padZero(now.getSeconds());

      document.getElementById('hours')!.textContent = hours;
      document.getElementById('minutes')!.textContent = minutes;
      document.getElementById('seconds')!.textContent = seconds;
    }, 1000);
  }
  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

}
