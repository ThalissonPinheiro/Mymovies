import { Component } from '@angular/core';
import { ThemoviedbService } from './services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private readonly service:ThemoviedbService){
      this.service.getMovies().subscribe({
        next:(resp: any) => {
          console.log(resp);
        },
        error:(error) => {
          console.error(error);
        }
      })
    }
  
}