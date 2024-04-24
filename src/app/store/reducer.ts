import { ActionReducerMap } from "@ngrx/store";
import { IStoreState } from "./store.state.interface";
import { appStateReducer } from "./app-state/app-state.reducer";

export const reducers: ActionReducerMap<IStoreState> = {
  appState: appStateReducer as any,
};
