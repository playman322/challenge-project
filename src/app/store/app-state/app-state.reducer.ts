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
  movieList: null as unknown as Movie[],
  movie: {} as Movie,
  theme: Theme.Light,
  isDesktop: false,
} as AppState;

const reducer = createReducer(
  initialState,
  on(AppStateActions.SearchMovieList, (state): AppState => {
    return {
      ...state,
      isLoaded: false
    };
  }),
  on(AppStateActions.SearchMovieListSuccess, (state, { payload }): AppState => {
    return {
      ...state,
      movieList: payload
    };
  }),
  on(AppStateActions.SearchMovieListError, (state, { payload }): AppState => ({
      ...state,
      error: payload,
      isLoaded: true
  })),
  on(AppStateActions.GetMovie, (state): AppState => ({
      ...state,
      isLoaded: false
  })),
  on(AppStateActions.GetMovieSuccess, (state, { payload }): AppState => ({
      ...state,
      movie: payload,
      isLoaded: true
  })),
  on(AppStateActions.GetMovieError, (state, { payload }): AppState => ({
      ...state,
      error: payload,
      isLoaded: true
  })),
  on(AppStateActions.ChangeTheme, (state, { payload }): AppState => ({
      ...state,
      theme: payload
  }))
);

export function appStateReducer(state: AppState, action: Action): ActionReducer<AppState, Action> {
  return reducer(state, action) as any;
}
