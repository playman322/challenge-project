import { ListState } from "./list-state.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectListState = createFeatureSelector<ListState>('listState');

export const selectMovieList = createSelector(
  selectListState,
  (state: ListState) => state.movieList
);

export const selectIsLoading = createSelector(
  selectListState,
  (state: ListState) => state.isLoading
);

export const ListStateSelectors = {
  selectMovieList,
  selectIsLoading
}
