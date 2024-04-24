import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, debounceTime, distinct, distinctUntilChanged, map, of, switchMap, tap } from "rxjs";
import { AppStateActions } from "./app-state.actions";
import { ApiHttpService } from "../../shared/services/api-http.service";
import { ObjectMappingService } from "../../shared/services/mapping.service";

@Injectable({
  providedIn: 'root'
})
export class AppStateEffects {
  private apiService = inject(ApiHttpService);
  actions$ = inject(Actions);

  suggestionsData$ = createEffect(() =>
    this.actions$.pipe(
      debounceTime(500),
      ofType(AppStateActions.SearchSuggestions),
      switchMap(({ payload }) =>
        this.apiService.getSearchSuggestions(payload).pipe(
          distinct(value => {
            console.log(value)
            return value.title;
          }),
          map(({ data }) => AppStateActions.SearchSuggestionSuccess({ payload: data.map((value: any) => value.name)})),
        )
      ),
      catchError(error => of(AppStateActions.SearchSuggestionError({ payload: error })))
    )
  );

  searchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.SearchData),
      switchMap(({ payload }) =>
        this.apiService.getSearchData(payload).pipe(
          map(({ data }) => AppStateActions.SearchDataSuccess({ payload: data.map((image: any) => ObjectMappingService.mapDataDTOtoImages(image)) }))
        )
      ),
      catchError(error => of(AppStateActions.SearchDataError({ payload: error })))
    )
  );
}
