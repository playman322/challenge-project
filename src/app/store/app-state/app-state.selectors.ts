import { AppState } from "./app-state.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectAppState = createFeatureSelector<AppState>('appState');

export const selectIsLoading = createSelector(
  selectAppState,
  (state: AppState) => state.isLoading
);

export const selectMovieList = createSelector(
  selectAppState,
  (state: AppState) => state.movieList
);

export const selectMovie = createSelector(
  selectAppState,
  (state: AppState) => state.movie
);

export const selectTheme = createSelector(
  selectAppState,
  (state: AppState) => state.theme
);

export const selectIsLoggedIn = createSelector(
  selectAppState,
  (state: AppState) => state.isLoggedIn
);

export const AppStateSelectors = {
  selectIsLoading,
  selectMovieList,
  selectMovie,
  selectTheme,
  selectIsLoggedIn
}
