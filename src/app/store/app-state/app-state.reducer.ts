import { Action, createReducer, on } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';
import { AppState } from "./app-state.interface";
import { AppStateActions } from "./app-state.actions";
import { Theme } from "../../models/theme.model";

const initialState: AppState = {
  theme: Theme.Light,
  isLoggedIn: false,
} as AppState;

const reducer = createReducer(
  initialState,
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
