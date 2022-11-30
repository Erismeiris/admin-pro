import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [
  ]
})
export class Graphic1Component {

  data1: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Class 1', backgroundColor:'#c300ff' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Class 2', backgroundColor: '#ccc' }
    ],
  };

  data2: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Class 3', backgroundColor: '#5D3EFF' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Class 4', backgroundColor: '#FFED3D' }
    ]
  };

  data3: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Class 5', backgroundColor: '#5D1600' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Class 6', backgroundColor: '#00FF40' }
    ]
  };

  data4: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Class 7', backgroundColor:'#CA5900'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Class 8', backgroundColor: '#FFBF00'}
    ]
  };

  
}
