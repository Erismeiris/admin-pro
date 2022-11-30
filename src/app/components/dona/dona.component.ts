import { Component, Input,OnInit, ViewChild} from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
import { ChartConfiguration} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

@Input() title:string = 'Not title'

public barChartType: ChartType = 'bar';


@Input('data') barChartData: ChartData<'bar'> = {
  labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  datasets: [
    { 
      data: [ 65, 59, 80, 81, 56, 55, 40 ], 
      label: 'Series A' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  ]
};




}
