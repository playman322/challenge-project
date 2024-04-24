import { AppState } from "./app-state.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectAppState = createFeatureSelector<AppState>('appState');

export const selectIsAppLoaded = createSelector(
  selectAppState,
  (state: AppState) => state.isLoaded
);

export const selectAppData = createSelector(
  selectAppState,
  (state: AppState) => state.data
);

export const selectMovies = createSelector(
  selectAppState,
  (state: AppState) => state.movies
);

export const selectTheme = createSelector(
  selectAppState,
  (state: AppState) => state.theme
);

export const AppStateSelectors = {
  selectIsAppLoaded,
  selectAppData,
  selectMovies,
  selectTheme
}
