import { createAction, props } from '@ngrx/store';
import { Theme } from "../../models/theme.model";

export const AppStateActions = {
  SearchSuggestions: createAction('SearchSuggestions', props<{ payload: string }>()),
  SearchSuggestionSuccess: createAction('SearchSuggestionSuccess', props<{ payload: string[] }>()),
  SearchSuggestionError: createAction('SearchSuggestionError', props<{ payload: Error }>()),
  SearchData: createAction('SearchData', props<{ payload: number }>()),
  SearchDataSuccess: createAction('SearchDataSuccess', props<{ payload: any }>()),
  SearchDataError: createAction('SearchDataError', props<{ payload: Error }>()),
  ChangeTheme: createAction('ChangeTheme', props<{ payload: Theme | string }>()),
};
