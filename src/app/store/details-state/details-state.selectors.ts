import { DetailsState } from "./details-state.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectDetailsState = createFeatureSelector<DetailsState>('detailsState');

export const selectMovie = createSelector(
  selectDetailsState,
  (state: DetailsState) => state.movie
);

export const selectIsLoading = createSelector(
  selectDetailsState,
  (state: DetailsState) => state.isLoading
);

export const DetailsStateSelectors = {
  selectMovie,
  selectIsLoading
}
