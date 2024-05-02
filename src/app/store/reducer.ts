import { ActionReducerMap } from "@ngrx/store";
import { IStoreState } from "./store.state.interface";
import { appStateReducer } from "./app-state/app-state.reducer";
import { favoritesStateReducer } from "./favorites-state/favorites-state.reducer";
import { listStateReducer } from "./list-state/list-state.reducer";
import { detailsStateReducer } from "./details-state/details-state.reducer";

export const reducers: ActionReducerMap<IStoreState> = {
  appState: appStateReducer as any,
  favoritesState: favoritesStateReducer as any,
  listState: listStateReducer as any,
  detailsState: detailsStateReducer as any,
};
