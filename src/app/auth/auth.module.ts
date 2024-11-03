import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({ declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
    ], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AuthModule { }
