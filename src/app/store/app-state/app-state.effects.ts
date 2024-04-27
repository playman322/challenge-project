import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { AppStateActions } from "./app-state.actions";
import { ListService } from "../../shared/services/list.service";
import { DetailsService } from "../../shared/services/details.service";

@Injectable({
  providedIn: 'root'
})
export class AppStateEffects {
  private listService = inject(ListService);
  private detailsService = inject(DetailsService);
  private actions$ = inject(Actions);

  moviesListData$ = createEffect(() =>
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

  movieData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.GetMovie),
      switchMap(({ payload }) =>
        this.detailsService.getMovie(payload).pipe(
          map((data) => AppStateActions.GetMovieSuccess({ payload: data }))
        )
      ),
      catchError(error => of(AppStateActions.GetMovieError({ payload: error })))
    )
  );
}
