import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, map } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  private readonly URL_DISCOVER = `${environment.TMBD_URL}/discover/movie`;

  private readonly HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${environment.THE_MOVIE_DB_TOKEN}`
  }

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      this.URL_DISCOVER,
      {headers: this.HEADERS}
    ).pipe(
      map(
        (data: any) => data.results.map(
          (m: any) => {
           let newMovie: Movie = {
              backdrop_path: m.backdrop_path,
              poster_path: m.poster_path,
              genres: [],
              id: m.id,
              overview: m.overview,
              popularity: m.popularity,
              release_date: m.release_date, 
              title: m.title,
              video: m.video,
              vote_average: m.vote_average,
              vote_count: m.vote_average
            };

            return newMovie;
          }
        )
    )
  )
  }
}
