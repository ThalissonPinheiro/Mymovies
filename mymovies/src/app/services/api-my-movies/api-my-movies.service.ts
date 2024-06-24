import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class APIMyMoviesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getFavoritos(): Observable <any> {
    return this.http.get<any>(`${environment.MYMOVIES_URL}/favoritos`);
  }
}

