import { Component } from '@angular/core';
import { BuscargeneroService } from './services/buscargenero/buscargenero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( 
    private readonly service:BuscargeneroService
  ) {
    this.service.getGenres().subscribe({
      next: (resp: any) => {
        console.log(resp);
      },
      error: (error) => {
        console.error(error);
      }
    })
   }  
}

