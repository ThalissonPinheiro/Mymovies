import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscargeneroService } from 'src/app/services/buscargenero/buscargenero.service';
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-filtro-genero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtro-genero.component.html',
  styleUrls: ['./filtro-genero.component.css']
})
export class FiltroGeneroComponent implements OnInit {
  readonly GENEROS: Genre[] = [];


  constructor (
    private readonly service: BuscargeneroService
  ) {
      this.service.getGenres().subscribe({
        next: (data: Genre[]) => {
          console.log(data);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres(): void {
    this.service.getGenres().subscribe({
      next: (data: Genre[]) => {
        this.GENEROS.push(...data);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
