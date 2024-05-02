import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from "./favorites-state.interface";

const selectFavoritesState = createFeatureSelector<FavoritesState>('favoritesState');

export const selectFavorites = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.favoriteMovies
);

export const selectIsFavoritesLoaded = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.isLoading
);

export const selectFavoritesError = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.error
);

export const selectIsLoading = createSelector(
  selectFavoritesState,
  (state: FavoritesState) => state.isLoading
);

export const FavoritesStateSelectors = {
  selectFavorites,
  selectIsFavoritesLoaded,
  selectFavoritesError,
  selectIsLoading
}
