import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { AppStateActions } from "./app-state.actions";
import { ListService } from "../../shared/services/list.service";

@Injectable({
  providedIn: 'root'
})
export class AppStateEffects {
  private listService = inject(ListService);
  actions$ = inject(Actions);

  moviesData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.SearchMovies),
      switchMap(({ payload }) =>
        this.listService.getMoviesList(payload).pipe(
          tap(value => console.log(1, value)),
          map((data) => AppStateActions.SearchMoviesSuccess({ payload: data })),
        )
      ),
      catchError(error => of(AppStateActions.SearchMoviesError({ payload: error })))
    )
  );

  // searchData$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AppStateActions.SearchData),
  //     switchMap(({ payload }) =>
  //       this.apiService.getSearchData(payload).pipe(
  //         map(({ data }) => AppStateActions.SearchDataSuccess({ payload: data.map((image: any) => ObjectMappingService.mapDataDTOtoImages(image)) }))
  //       )
  //     ),
  //     catchError(error => of(AppStateActions.SearchDataError({ payload: error })))
  //   )
  // );
}
