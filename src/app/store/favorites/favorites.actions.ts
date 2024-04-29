import { createAction, props } from '@ngrx/store';
import { Movie } from "../../models/movies.model";

export const FavoritesActions = {
  LoadFavorites: createAction('[Favorites State] LoadFavorites'),
  LoadFavoritesSuccess: createAction('[Favorites State] LoadFavorites Success', props<{ payload: Movie[] }>()),
  LoadFavoritesError: createAction('[Favorites State] LoadFavoritesError', props<{ payload: Error }>()),
  SaveFavorites: createAction('[Favorites State] SaveFavorites', props<{ payload: Movie }>()),
  RemoveFromFavorites: createAction('[Favorites State] RemoveFromFavorites', props<{ payload: number }>()),
}
