import { Movie, MovieDTO } from "../../models/movies.model";
import { truncateString } from "../../utils/string.utils";
import { toLocaleDateString } from "../../utils/date.utils";
import { Unspecified } from "../../models/languages.model";

export class MappingService {
  public static mapMoviesDTOtoMovies(movies: MovieDTO[]): Movie[] {
    return movies.map((movie) => ({
      id: movie.id,
      overview: truncateString(movie.overview, 50) || Unspecified.Overview,
      popularity: movie.popularity,
      title: movie.original_title,
      thumbnail: movie.poster_path,
      release: toLocaleDateString(movie.release_date),
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
      language: movie.original_language,
    }))
  }

  public static mapMovieDTOtoMovie(movie: MovieDTO): Movie {
    return {
      id: movie.id,
      overview: movie.overview || Unspecified.Overview,
      popularity: movie.popularity,
      language: movie.original_language,
      title: movie.original_title,
      thumbnail: movie.poster_path,
      genres: movie.genres.map(genre => genre.name),
      budget: movie.budget !== 0 ? `${movie.budget}$` : Unspecified.None,
      revenue: movie.revenue !== 0 ? `${movie.revenue}$` : Unspecified.None,
      homepage: movie.homepage,
      country: movie.origin_country[0],
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
      release: toLocaleDateString(movie.release_date),
      isFavorite: false
    }
  }
}
