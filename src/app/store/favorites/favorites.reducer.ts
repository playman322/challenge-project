import { Action, createReducer, on } from '@ngrx/store';

import { FavoritesState } from "./favorites.interface";
import { FavoritesActions } from "./favorites.actions";
import { ActionReducer } from "@ngrx/store/src/models";

const initialState: FavoritesState = {
    favoriteMovies: [],
    isLoaded: false,
    error: null
};

export const reducer = createReducer(
    initialState,
    on(FavoritesActions.LoadFavorites, (state): FavoritesState => ({
        ...state,
        isLoaded: false
    })),
    on(FavoritesActions.LoadFavoritesSuccess, (state, { payload }): FavoritesState => ({
        ...state,
        favoriteMovies: payload,
        isLoaded: true
    })),
    on(FavoritesActions.LoadFavoritesError, (state, { payload }): FavoritesState => ({
        ...state,
        error: payload,
        isLoaded: true
    })),
    on(FavoritesActions.SaveFavorites, (state, { payload }): FavoritesState => ({
        ...state,
        favoriteMovies: [...state.favoriteMovies, { ...payload, isFavorite: true }]
    })),
    on(FavoritesActions.RemoveFromFavorites, (state, { payload }): FavoritesState => ({
        ...state,
        favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== payload)
    }))
);

export function favoritesStateReducer(state: FavoritesState, action: Action): ActionReducer<FavoritesState, Action> {
  return reducer(state, action) as any;
}
