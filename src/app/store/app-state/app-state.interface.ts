import { Theme } from "../../models/theme.model";
import { MoviesList } from "../../models/movies.model";

export interface AppState {
  isLoaded: boolean;
  data: any;
  error: Error | null;
  movies: MoviesList[];
  theme: Theme | string;
  isDesktop: boolean;
}


