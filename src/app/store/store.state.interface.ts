import { AppState } from "./app-state/app-state.interface";
import { FavoritesState } from "./favorites/favorites.interface";

export interface IStoreState {
  appState: AppState;
  favoritesState: FavoritesState;
}
