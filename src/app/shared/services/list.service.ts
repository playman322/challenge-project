import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { Movie, MoviesResponseDTO } from "../../models/movies.model";
import { MappingService } from "./mapping.service";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  http = inject(HttpClient);

  private readonly movieListUrl = `${environment.apiUrl}/3/search/movie`

  getMovieList(query: string): Observable<Movie[]> {
    return this.http.get<MoviesResponseDTO>(this.movieListUrl, {
      params: {
        query: query,
        include_adult: false,
        language: 'en-US'
      }
    }).pipe(
      map(({ results }) => MappingService.mapMoviesDTOtoMovies(results)),
    );
  }
}
