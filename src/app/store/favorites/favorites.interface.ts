import { Movie } from "../../models/movies.model";

export interface FavoritesState {
  favoriteMovies: Movie[];
  isLoaded: boolean;
  error: Error | null;
}
