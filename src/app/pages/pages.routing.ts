import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
    { path: 'dashboard',         component: PagesComponent, /* canActivate: [AuthGuard] */  
    children: [
      { path: '', component: DashboardComponent, data: {title:'Dashboard'} },
      { path: 'progress',  component: ProgressComponent, data: {title:'ProgressBar'} },
      { path: 'graphic1',  component: Graphic1Component, data: {title:'Graphic'} },
      { path: 'account-setting',  component: AccountSettingsComponent, data: {title:'Account-setting'} },
      { path: 'promesas',  component: PromesasComponent, data: {title:'Promise'} },
      { path: 'rxjs',  component: RxjsComponent, data: {title:'Rxjs'} },
      
      ]
  },
     

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
