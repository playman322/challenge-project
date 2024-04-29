import { Theme } from "../../models/theme.model";
import { Movie } from "../../models/movies.model";

export interface AppState {
  isLoaded: boolean;
  error: Error | null;
  movieList: Movie[];
  movie: Movie;
  theme: Theme | string;
  isDesktop: boolean;
}
