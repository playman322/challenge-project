import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { MoviesList, MoviesListResponseDTO } from "../../models/movies.model";
import { MappingService } from "./mapping.service";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  http = inject(HttpClient);

  private readonly moviesListUrl = `${environment.apiUrl}/3/search/movie`

  getMoviesList(query: string): Observable<MoviesList[]> {
    return this.http.get<MoviesListResponseDTO>(this.moviesListUrl, {
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
