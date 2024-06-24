import { Component, OnInit } from '@angular/core';
import { APIMyMoviesService } from 'src/app/services/api-my-movies/api-my-movies.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: any;

  constructor(
    private readonly service: APIMyMoviesService
  ) { }

  ngOnInit(): void {
    this.loadFavoritos();
  }

loadFavoritos(): void {
  this.service.getFavoritos().subscribe(
    {
      next: (data: any) => {
        this.favoritos = (data);
      },
        error: (erro) => {
          console.error(erro);
        }
    });
  }
}
