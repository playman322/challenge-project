import { Theme } from "../../models/theme.model";
import { Movie, MoviesList } from "../../models/movies.model";

export interface AppState {
  isLoaded: boolean;
  error: Error | null;
  moviesList: MoviesList[];
  movie: Movie;
  theme: Theme | string;
  isDesktop: boolean;
}
