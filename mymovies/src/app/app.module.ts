import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
