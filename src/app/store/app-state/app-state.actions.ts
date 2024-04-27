import { createAction, props } from '@ngrx/store';
import { Theme } from "../../models/theme.model";
import { Movie, MoviesList } from "../../models/movies.model";

export const AppStateActions = {
  SearchMovies: createAction('[List State] SearchMovies', props<{ payload: string }>()),
  SearchMoviesSuccess: createAction('[List State] SearchMoviesSuccess', props<{ payload: MoviesList[] }>()),
  SearchMoviesError: createAction('[List State] SearchMoviesError', props<{ payload: Error }>()),
  GetMovie: createAction('[Details State] SearchData', props<{ payload: number }>()),
  GetMovieSuccess: createAction('[Details State] SearchDataSuccess', props<{ payload: Movie }>()),
  GetMovieError: createAction('[Details State] SearchDataError', props<{ payload: Error }>()),
  ChangeTheme: createAction('[App State] ChangeTheme', props<{ payload: Theme | string }>()),
};
