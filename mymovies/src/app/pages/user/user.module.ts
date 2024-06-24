import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CadastroComponent } from './favoritos/cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ListComponent } from './favoritos/list/list.component';


@NgModule({
  declarations: [
    UserComponent,
    CadastroComponent,
    LoginComponent,
    FavoritosComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ListComponent
  ]
})
export class UserModule { }
