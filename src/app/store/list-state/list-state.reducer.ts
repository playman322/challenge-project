import { Action, createReducer, on } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';
import { ListState } from "./list-state.interface";
import { ListStateActions } from "./list-state.actions";

const initialState: ListState = {
  isLoading: false,
  error: null,
  movieList: [],
} as ListState;

const reducer = createReducer(
  initialState,
  on(ListStateActions.SearchMovieList, (state): ListState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ListStateActions.SearchMovieListSuccess, (state, { payload }): ListState => {
    return {
      ...state,
      movieList: payload,
      isLoading: false
    };
  }),
  on(ListStateActions.SearchMovieListError, (state, { payload }): ListState => ({
      ...state,
      error: payload,
      isLoading: false
  })),
);

export function listStateReducer(state: ListState, action: Action): ActionReducer<ListState, Action> {
  return reducer(state, action) as any;
}
