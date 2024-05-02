import { Movie } from "../../models/movies.model";

export interface FavoritesState {
  favoriteMovies: Movie[];
  isLoading: boolean;
  error: Error | null;
}
