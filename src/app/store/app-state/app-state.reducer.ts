import { Action, createReducer, on } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';
import { AppState } from "./app-state.interface";
import { AppStateActions } from "./app-state.actions";
import { Theme } from "../../models/theme.model";
import { Movie } from "../../models/movies.model";

const initialState: AppState = {
  isLoading: false,
  error: null,
  movieList: [],
  movie: {} as Movie,
  theme: Theme.Light,
  isLoggedIn: false,
} as AppState;

const reducer = createReducer(
  initialState,
  on(AppStateActions.SearchMovieList, (state): AppState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AppStateActions.SearchMovieListSuccess, (state, { payload }): AppState => {
    return {
      ...state,
      movieList: payload,
      isLoading: false
    };
  }),
  on(AppStateActions.SearchMovieListError, (state, { payload }): AppState => ({
      ...state,
      error: payload,
      isLoading: false
  })),
  on(AppStateActions.GetMovie, (state): AppState => ({
      ...state,
      isLoading: true,
  })),
  on(AppStateActions.GetMovieSuccess, (state, { payload }): AppState => ({
      ...state,
      movie: payload,
      isLoading: false
  })),
  on(AppStateActions.GetMovieError, (state, { payload }): AppState => ({
      ...state,
      error: payload,
      isLoading: false
  })),
  on(AppStateActions.ChangeTheme, (state, { payload }): AppState => ({
      ...state,
      theme: payload
  })),
  on(AppStateActions.LogIn, (state, { payload }): AppState => ({
    ...state,
    isLoggedIn: payload
  }))
);

export function appStateReducer(state: AppState, action: Action): ActionReducer<AppState, Action> {
  return reducer(state, action) as any;
}
