import { createAction, props } from '@ngrx/store';
import { Movie } from "../../models/movies.model";

export const ListStateActions = {
  SearchMovieList: createAction('[List State] SearchMovieList', props<{ payload: string }>()),
  SearchMovieListSuccess: createAction('[List State] SearchMovieListSuccess', props<{ payload: Movie[] }>()),
  SearchMovieListError: createAction('[List State] SearchMovieListError', props<{ payload: Error }>()),
};
