import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AnimacaoComponent } from './pages/animacao/animacao.component';
import { RomanticaComponent } from './pages/romantica/romantica.component';
import { BesteirolComponent } from './pages/besteirol/besteirol.component';
import { TerirComponent } from './pages/terir/terir.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemoviedbService } from './services/themoviedb/themoviedb.service';
import { BuscargeneroService } from './services/buscargenero/buscargenero.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    PageNotFoundComponent,
    AnimacaoComponent,
    RomanticaComponent,
    BesteirolComponent,
    TerirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsListComponent,
    HeaderComponent,
    HttpClientModule,
  ],
  providers: [
    ThemoviedbService,
    BuscargeneroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
