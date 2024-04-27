import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { selectFavorites } from './favorites.selectors';
import { catchError, map, of, switchMap } from 'rxjs';
import { FavoritesActions } from "./favorites.actions";

@Injectable()
export class FavoritesEffects {
  private store = inject(Store);
  private actions$ = inject(Actions);

  // loadFavorites$ = createEffect(() => this.actions$.pipe(
  //   ofType(FavoritesActions.LoadFavorites),
  //   switchMap(() =>
  //     this.store.select(selectFavorites).pipe(
  //       map(favorites => FavoritesActions.LoadFavoritesSuccess({ payload: favorites })),
  //       catchError(error => of(FavoritesActions.LoadFavoritesError({ payload: error })))
  //     )
  //   )
  // ));
}
