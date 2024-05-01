import { Theme } from "../../models/theme.model";
import { Movie } from "../../models/movies.model";

export interface AppState {
  isLoading: boolean;
  error: Error | null;
  movieList: Movie[];
  movie: Movie;
  theme: Theme | string;
  isLoggedIn: boolean;
}
