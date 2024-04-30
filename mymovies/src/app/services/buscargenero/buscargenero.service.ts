import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BuscargeneroService {
  private readonly URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR';

  private readonly HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${environment.THE_MOVIE_DB_TOKEN}`
  }

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getGenres(): Observable <any> {
    return this.httpClient.get<any>(
      this.URL_GENRES,
      {headers: this.HEADERS}
    );
  }
}