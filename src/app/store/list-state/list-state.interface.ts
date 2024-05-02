import { Movie } from "../../models/movies.model";

export interface ListState {
  isLoading: boolean;
  error: Error | null;
  movieList: Movie[];
}
