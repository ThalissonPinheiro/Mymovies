import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {
  private readonly URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';

  private readonly HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${environment.THE_MOVIE_DB_TOKEN}`
  }

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getMovies(): Observable<any> {
    return this.httpClient.get<any>(
      this.URL_DISCOVER,
      {headers: this.HEADERS}
    );
  }
}
