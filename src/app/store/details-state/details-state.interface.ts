import { Movie } from "../../models/movies.model";

export interface DetailsState {
  isLoading: boolean;
  error: Error | null;
  movie: Movie;
}
