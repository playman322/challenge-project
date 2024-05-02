import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ListStateActions } from "./list-state.actions";
import { ListService } from "../../shared/services/list.service";

@Injectable({
  providedIn: 'root'
})
export class ListStateEffects {
  private listService = inject(ListService);
  private actions$ = inject(Actions);

  movieListData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListStateActions.SearchMovieList),
      switchMap(({ payload }) =>
        this.listService.getMovieList(payload).pipe(
          map((data) => ListStateActions.SearchMovieListSuccess({ payload: data })),
        )
      ),
      catchError(error => of(ListStateActions.SearchMovieListError({ payload: error })))
    )
  );
}
