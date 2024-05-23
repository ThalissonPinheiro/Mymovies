import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private readonly service: ThemoviedbService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.loadMovies();
    }, 5000);
  }

  loadMovies(): void {
    this.service.getMovies().subscribe({
      next: (data: Movie[]) => {
        this.movies = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  }