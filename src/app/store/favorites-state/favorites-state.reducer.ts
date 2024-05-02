import { Action, createReducer, on } from '@ngrx/store';

import { FavoritesState } from "./favorites-state.interface";
import { FavoritesStateActions } from "./favorites-state.actions";
import { ActionReducer } from "@ngrx/store/src/models";

const initialState: FavoritesState = {
    favoriteMovies: [],
    isLoading: false,
    error: null
};

export const reducer = createReducer(
    initialState,
    on(FavoritesStateActions.LoadFavorites, (state): FavoritesState => ({
        ...state,
        isLoading: true
    })),
    on(FavoritesStateActions.LoadFavoritesSuccess, (state, { payload }): FavoritesState => ({
        ...state,
        favoriteMovies: payload,
        isLoading: false
    })),
    on(FavoritesStateActions.LoadFavoritesError, (state, { payload }): FavoritesState => ({
        ...state,
        error: payload,
        isLoading: false
    })),
    on(FavoritesStateActions.SaveFavorites, (state, { payload }): FavoritesState => ({
        ...state,
        favoriteMovies: [...state.favoriteMovies, { ...payload, isFavorite: true }]
    })),
    on(FavoritesStateActions.RemoveFromFavorites, (state, { payload }): FavoritesState => ({
        ...state,
        favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== payload)
    }))
);

export function favoritesStateReducer(state: FavoritesState, action: Action): ActionReducer<FavoritesState, Action> {
  return reducer(state, action) as any;
}
