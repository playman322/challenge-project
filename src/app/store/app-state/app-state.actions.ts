import { createAction, props } from '@ngrx/store';
import { Theme } from "../../models/theme.model";
import { Movie } from "../../models/movies.model";

export const AppStateActions = {
  SearchMovieList: createAction('[List State] SearchMovieList', props<{ payload: string }>()),
  SearchMovieListSuccess: createAction('[List State] SearchMovieListSuccess', props<{ payload: Movie[] }>()),
  SearchMovieListError: createAction('[List State] SearchMovieListError', props<{ payload: Error }>()),
  GetMovie: createAction('[Details State] SearchData', props<{ payload: number }>()),
  GetMovieSuccess: createAction('[Details State] SearchDataSuccess', props<{ payload: Movie }>()),
  GetMovieError: createAction('[Details State] SearchDataError', props<{ payload: Error }>()),
  ChangeTheme: createAction('[App State] ChangeTheme', props<{ payload: Theme | string }>()),
};
