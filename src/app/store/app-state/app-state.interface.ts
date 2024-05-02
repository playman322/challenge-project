import { Theme } from "../../models/theme.model";

export interface AppState {
  theme: Theme | string;
  isLoggedIn: boolean;
}
