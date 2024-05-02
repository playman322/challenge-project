import { AppState } from "./app-state/app-state.interface";
import { FavoritesState } from "./favorites-state/favorites-state.interface";
import { ListState } from "./list-state/list-state.interface";
import { DetailsState } from "./details-state/details-state.interface";

export interface IStoreState {
  appState: AppState;
  favoritesState: FavoritesState;
  listState: ListState;
  detailsState: DetailsState;
}
