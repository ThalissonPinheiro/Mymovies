import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TERIR, ANIMACAO, RECOMENDADOS, ROMANTICA, BESTEIROL } from 'src/dataset/dataset';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  movieName: string = '';
  movies = RECOMENDADOS.results;
  movie: any;

  constructor(
    readonly dadosRota: ActivatedRoute
  ) {
    this.movieName = this.dadosRota.snapshot.params['movieName'];
    this.loadMovieDetails();
  }

  loadMovieDetails() {
    this.movie = this.movies.find(filme => filme.title === this.movieName);

    console.log(this.movie);

  }

}

/*
  TENTEI ASSIM PROFESSOR

export class DetailsComponent implements OnInit {
  movieName: string = '';
  type: string = '';

  movies: any[] = [];

  movie: any;

  constructor(
    readonly dadosRota: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieName = this.dadosRota.snapshot.params['movieName'];
    this.type = this.dadosRota.snapshot.params['type'];
    this.loadMovieDetails(); 
  }

  loadMovieDetails() {
    switch (this.type) {
      case 'RECOMENDADOS':
        this.movies = RECOMENDADOS.results;
        break;
      case 'TERIR':
        this.movies = TERIR.results;
        break;
      case 'ANIMACAO':
        this.movies = ANIMACAO.results;
        break;
      case 'ROMANTICA':
        this.movies = ROMANTICA.results;
        break;
      case 'BESTEIROL':
        this.movies = BESTEIROL.results;
        break;
      default:
        this.movies = [];
        break;
     }

    this.movie = this.movies.find(filme => filme.title === this.movieName);

    console.log(this.movie);
  }
}
*/
