import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TerirComponent } from './pages/terir/terir.component';
import { BesteirolComponent } from './pages/besteirol/besteirol.component';
import { RomanticaComponent } from './pages/romantica/romantica.component';
import { AnimacaoComponent } from './pages/animacao/animacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'MyMovies - Home',
    component: HomeComponent
  },
  {
    path: 'terir',
    title: 'MyMovies - Terir',
    component: TerirComponent
  },
  {
    path: 'romantica',
    title: 'MyMovies - Romantica',
    component: RomanticaComponent
  },
  {
    path: 'animacao',
    title: 'MyMovies - Animação',
    component: AnimacaoComponent
  },
  {
    path: 'besteirol',
    title: 'MyMovies - Besteirol',
    component: BesteirolComponent
  },
  {
    path: 'details/:movieName',
    title: 'MyMovies - Details',
    component: DetailsComponent
  },
  {
    path: 'user',
    title: 'MyMovies - Login',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    title: 'Página não encontrada',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
