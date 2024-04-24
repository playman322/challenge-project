import { Theme } from "../../models/theme.model";

export interface AppState {
  isLoaded: boolean;
  data: any;
  error: Error | null;
  suggestions: any;
  theme: Theme | string;
  isDesktop: boolean;
}


