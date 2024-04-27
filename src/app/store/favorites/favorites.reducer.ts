import { createReducer, on } from '@ngrx/store';

import { FavoritesState } from "./favorites.interface";
import { FavoritesActions } from "./favorites.actions";

export const initialState: FavoritesState = {
    favoriteMovies: [],
    isLoaded: false,
    error: null
};

export const favoritesReducer = createReducer(
    initialState,
    on(FavoritesActions.LoadFavorites, state => ({
        ...state,
        isLoaded: false
    })),
    on(FavoritesActions.LoadFavoritesSuccess, (state, { favorites }) => ({
        ...state,
        favorites,
        isLoaded: true
    })),
    on(FavoritesActions.LoadFavoritesError, (state, { error }) => ({
        ...state,
        error,
        isLoaded: true
    })),
    on(FavoritesActions.SaveFavorites, (state, { item }) => ({
        ...state,
        favoriteMovies: [...state.favoriteMovies, item]
    })),
    on(FavoritesActions.RemoveFromFavorites, (state, { id }) => ({
        ...state,
        favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== id)
    }))
);
