import { Action, createReducer, on } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';
import { AppState } from "./app-state.interface";
import { AppStateActions } from "./app-state.actions";
import { Theme } from "../../models/theme.model";
import { Movie } from "../../models/movies.model";

const initialState: AppState = {
  isLoaded: false,
  data: [],
  error: null,
  moviesList: [],
  movie: {} as Movie,
  theme: Theme.Light,
  isDesktop: false,
} as AppState;

const reducer = createReducer(
  initialState,
  on(AppStateActions.SearchMovies, (state): AppState => {
    return {
      ...state,
      isLoaded: false
    };
  }),
  on(AppStateActions.SearchMoviesSuccess, (state, { payload }): AppState => {
    return {
      ...state,
      moviesList: payload
    };
  }),
  on(AppStateActions.SearchMoviesError, (state, { payload }): AppState => {
    return {
      ...state,
      error: payload,
      isLoaded: true
    };
  }),
  on(AppStateActions.GetMovie, (state): AppState => {
    return {
      ...state,
      isLoaded: false
    };
  }),
  on(AppStateActions.GetMovieSuccess, (state, { payload }): AppState => {
    return {
      ...state,
      movie: payload,
      isLoaded: true
    };
  }),
  on(AppStateActions.GetMovieError, (state, { payload }): AppState => {
    return {
      ...state,
      error: payload,
      isLoaded: true
    };
  }),
  on(AppStateActions.ChangeTheme, (state, { payload }): AppState => {
    return {
      ...state,
      theme: payload
    };
  })
);

export function appStateReducer(state: AppState, action: Action): ActionReducer<AppState, Action> {
  return reducer(state, action) as any;
}
