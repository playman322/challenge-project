import { ActionReducerMap } from "@ngrx/store";
import { IStoreState } from "./store.state.interface";
import { appStateReducer } from "./app-state/app-state.reducer";
import { favoritesStateReducer } from "./favorites/favorites.reducer";

export const reducers: ActionReducerMap<IStoreState> = {
  appState: appStateReducer as any,
  favoritesState: favoritesStateReducer as any
};
