import { createAction, props } from '@ngrx/store';
import { Theme } from "../../models/theme.model";

export const AppStateActions = {
  SearchMovies: createAction('SearchMovies', props<{ payload: string }>()),
  SearchMoviesSuccess: createAction('SearchMoviesSuccess', props<{ payload: any }>()),
  SearchMoviesError: createAction('SearchMoviesError', props<{ payload: Error }>()),
  SearchData: createAction('SearchData', props<{ payload: number }>()),
  SearchDataSuccess: createAction('SearchDataSuccess', props<{ payload: any }>()),
  SearchDataError: createAction('SearchDataError', props<{ payload: Error }>()),
  ChangeTheme: createAction('ChangeTheme', props<{ payload: Theme | string }>()),
};
