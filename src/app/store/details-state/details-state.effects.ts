import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { DetailsStateActions } from "./details-state.actions";
import { DetailsService } from "../../shared/services/details.service";

@Injectable({
  providedIn: 'root'
})
export class DetailsStateEffects {
  private detailsService = inject(DetailsService);
  private actions$ = inject(Actions);

  movieData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailsStateActions.GetMovie),
      switchMap(({ payload }) =>
        this.detailsService.getMovie(payload).pipe(
          map((data) => DetailsStateActions.GetMovieSuccess({ payload: data }))
        )
      ),
      catchError(error => of(DetailsStateActions.GetMovieError({ payload: error })))
    )
  );
}
