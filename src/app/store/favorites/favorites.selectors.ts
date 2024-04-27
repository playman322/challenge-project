import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from "./favorites.interface";
import { Movie } from "../../models/movies.model";

export const selectFavoritesState = createFeatureSelector<FavoritesState>('favorites');

export const selectFavorites = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.favoriteMovies
);

export const selectIsFavoritesLoaded = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.isLoaded
);

export const selectFavoritesError = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.error
);

export const selectFavoriteById = (id: number) => createSelector(
  selectFavorites,
  (favorites: Movie[]) => favorites.find(movie => movie.id === id)
);

export const FavoritesStateSelectors = {
  selectFavorites,
  selectIsFavoritesLoaded,
  selectFavoritesError,
  selectFavoriteById,
}
