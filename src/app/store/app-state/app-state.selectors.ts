import { AppState } from "./app-state.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectAppState = createFeatureSelector<AppState>('appState');

export const selectTheme = createSelector(
  selectAppState,
  (state: AppState) => state.theme
);

export const selectIsLoggedIn = createSelector(
  selectAppState,
  (state: AppState) => state.isLoggedIn
);

export const AppStateSelectors = {
  selectTheme,
  selectIsLoggedIn
}
