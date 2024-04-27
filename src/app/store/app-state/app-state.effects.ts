import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
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

  movieListData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppStateActions.SearchMovieList),
      switchMap(({ payload }) =>
        this.listService.getMovieList(payload).pipe(
          map((data) => AppStateActions.SearchMovieListSuccess({ payload: data })),
        )
      ),
      catchError(error => of(AppStateActions.SearchMovieListError({ payload: error })))
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
