import { Component } from '@angular/core';
import { ThemoviedbService } from './services/themoviedb/themoviedb.service';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private readonly service:ThemoviedbService){
      this.service.getMovies().subscribe({
        next:(data: Movie[]) => {
          console.log(data);
        },
        error:(error: any) => {
          console.error(error);
        }
      })
    }
  
}