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
