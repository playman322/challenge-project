import { Action, createReducer, on } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';
import { AppState } from "./app-state.interface";
import { AppStateActions } from "./app-state.actions";
import { Theme } from "../../models/theme.model";

const initialState: AppState = {
  isLoaded: false,
  data: [],
  error: null,
  suggestions: [],
  theme: Theme.Light,
  isDesktop: false,
} as AppState;

const reducer = createReducer(
  initialState,
  on(AppStateActions.SearchDataError, (state, { payload }) => {
    return {
      ...state,
      isLoaded: false,
      error: payload
    };
  }),
  on(AppStateActions.SearchSuggestions, state => {
    return {
      ...state,
    };
  }),
  on(AppStateActions.SearchSuggestionSuccess, (state, { payload }) => {
    return {
      ...state,
      suggestions: payload
    };
  }),
  on(AppStateActions.SearchSuggestionError, (state, { payload }) => {
    return {
      ...state,
      error: payload
    };
  }),
  on(AppStateActions.SearchData, state => {
    return {
      ...state,
      isLoaded: false
    };
  }),
  on(AppStateActions.ChangeTheme, (state, { payload }) => {
    return {
      ...state,
      theme: payload
    };
  })
);

export function appStateReducer(state: AppState, action: Action): ActionReducer<AppState, Action> {
  return reducer(state, action) as any;
}
