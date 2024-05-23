import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CadastroComponent } from './favoritos/cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    UserComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
