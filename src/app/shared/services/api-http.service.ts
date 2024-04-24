import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

enum Limit {
  Suggestions = 5,
  Data = 15
}

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  http = inject(HttpClient);

  getSearchSuggestions(query: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/3/search/movie?query=${query}&include_adult=false&language=en-US`);
  }

  getSearchData(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/3/search/movie/${id}?language=en-US`);
  }
}
