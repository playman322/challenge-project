import { Action, createReducer, on } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';
import { DetailsState } from "./details-state.interface";
import { DetailsStateActions } from "./details-state.actions";
import { Movie } from "../../models/movies.model";

const initialState: DetailsState = {
  isLoading: false,
  error: null,
  movie: {} as Movie,
} as DetailsState;

const reducer = createReducer(
  initialState,
  on(DetailsStateActions.GetMovie, (state): DetailsState => ({
      ...state,
      isLoading: true,
  })),
  on(DetailsStateActions.GetMovieSuccess, (state, { payload }): DetailsState => ({
      ...state,
      movie: payload,
      isLoading: false
  })),
  on(DetailsStateActions.GetMovieError, (state, { payload }): DetailsState => ({
      ...state,
      error: payload,
      isLoading: false
  })),
);

export function detailsStateReducer(state: DetailsState, action: Action): ActionReducer<DetailsState, Action> {
  return reducer(state, action) as any;
}
