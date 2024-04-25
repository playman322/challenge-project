import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { Movie, MovieDTO } from "../../models/movies.model";
import { ObjectMappingService } from "./mapping.service";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  http = inject(HttpClient);

  private readonly movieUrl = `${environment.apiUrl}/3/movie`

  getSearchData(id: number): Observable<Movie> {
    return this.http.get<MovieDTO>(this.movieUrl, {
      params: {
        movie_id: id,
        include_adult: false,
        language: 'en-US'
      }
    }).pipe(
      map((movie) => ObjectMappingService.mapMovieDTOtoMovie(movie)),
    );
  }
}
