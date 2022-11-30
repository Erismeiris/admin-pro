import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//Módulos personalizados
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule } from '@angular/router';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
     //Modulo de pages
     DashboardComponent,
     ProgressComponent,
     Graphic1Component,
     PagesComponent,
     AccountSettingsComponent,
     PromesasComponent,
     RxjsComponent,
  ],
  exports:[
    DashboardComponent,
     ProgressComponent,
     Graphic1Component,
     PagesComponent,
     AccountSettingsComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    RouterModule
  
  ]
})
export class PagesModule { }
