import { createAction, props } from '@ngrx/store';
import { Movie } from "../../models/movies.model";

export const FavoritesActions = {
  LoadFavorites: createAction('[Favorites State] LoadFavorites'),
  LoadFavoritesSuccess: createAction('[Favorites State] LoadFavorites Success', props<{ favorites: Movie[] }>()),
  LoadFavoritesError: createAction('[Favorites State] LoadFavoritesError', props<{ error: Error }>()),
  SaveFavorites: createAction('[Favorites State] SaveFavorites', props<{ item: Movie }>()),
  RemoveFromFavorites: createAction('[Favorites State] RemoveFromFavorites', props<{ id: number }>()),
}
