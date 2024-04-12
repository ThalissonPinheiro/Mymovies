import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TERIR, ANIMACAO, RECOMENDADOS, ROMANTICA, BESTEIROL } from 'src/dataset/dataset';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  movieName: string = '';
  movies: any[] = [];
  movie: any;
  TERIR = TERIR;
  ANIMACAO = ANIMACAO;
  RECOMENDADOS = RECOMENDADOS;
  ROMANTICA = ROMANTICA;
  BESTEIROL = BESTEIROL;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieName = params['movieName'];
      this.loadMovieDetails();
    });
  }

  loadMovieDetails() {
    // Concatenando os resultados dos diferentes gêneros
    this.movies = [...RECOMENDADOS.results, ...TERIR.results, ...ANIMACAO.results, ...ROMANTICA.results, ...BESTEIROL.results];
    this.movie = this.movies.find(filme => filme.title === this.movieName);

    console.log(this.movie);
  }
}
