import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { Movie, MovieDTO } from "../../models/movies.model";
import { MappingService } from "./mapping.service";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  http = inject(HttpClient);

  private readonly movieUrl = `${environment.apiUrl}/3/movie/`

  getMovie(id: number): Observable<Movie> {
    return this.http.get<MovieDTO>(this.movieUrl + id, {
      params: {
        language: 'en-US'
      }
    }).pipe(
      map((movie) => MappingService.mapMovieDTOtoMovie(movie)),
    );
  }
}
