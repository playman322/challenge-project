import { AppState } from "./app-state.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectAppState = createFeatureSelector<AppState>('appState');

export const selectIsAppLoaded = createSelector(
  selectAppState,
  (state: AppState) => state.isLoaded
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

export const AppStateSelectors = {
  selectIsAppLoaded,
  selectMovieList,
  selectMovie,
  selectTheme
}
