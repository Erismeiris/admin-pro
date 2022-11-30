import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  menu:any[]=[
    { title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu:[
        {title:'Main', url: '/' },
        {title:'Progressbar', url: 'progress' },
        {title:'Graphics', url: 'graphic1' },
        {title:'Promesas', url: 'promesas' },
        {title:'Rxjs', url: 'rxjs' },
      ]
  }
  ]

  constructor() { }
}
