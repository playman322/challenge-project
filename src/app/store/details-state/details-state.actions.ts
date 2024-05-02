import { createAction, props } from '@ngrx/store';
import { Movie } from "../../models/movies.model";

export const DetailsStateActions = {
  GetMovie: createAction('[Details State] SearchData', props<{ payload: number }>()),
  GetMovieSuccess: createAction('[Details State] SearchDataSuccess', props<{ payload: Movie }>()),
  GetMovieError: createAction('[Details State] SearchDataError', props<{ payload: Error }>()),
};
