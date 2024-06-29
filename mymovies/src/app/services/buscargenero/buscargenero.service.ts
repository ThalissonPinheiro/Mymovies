import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Genre } from 'src/app/models/genre';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BuscargeneroService {
  private readonly URL_GENRES = `${environment.TMBD_URL}/genre/movie/list?language=pt-BR`;

  private readonly HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${environment.THE_MOVIE_DB_TOKEN}`
  }

  /*
  private readonly HEADERS : HttpHeaders = new HttpHeaders({
    'Accept': 'apllication/json',
    'Authorization': 'Bearer ${environment.THE_MOVIE_DB_TOKEN}'
  });
  */

  constructor(
    private readonly http: HttpClient
  ) { }

  getGenres(): Observable <Genre[]> {
    return this.http.get<Genre[]>(
      this.URL_GENRES,
      {headers: this.HEADERS}
    ).pipe(
      map(
        (data: any) => data.genres.map(
          (genre: any) => {
           const newGenre: Genre = {
              id: genre.id,
              label: genre.name
            };

            return newGenre;
          }
        )
    )
  )
}
}