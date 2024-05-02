import { createAction, props } from '@ngrx/store';
import { Theme } from "../../models/theme.model";

export const AppStateActions = {
  ChangeTheme: createAction('[App State] ChangeTheme', props<{ payload: Theme | string }>()),
  LogIn: createAction('[App State] LogIn', props<{ payload: boolean}>())
};
