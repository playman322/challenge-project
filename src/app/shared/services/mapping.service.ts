import { Movie, MovieDTO, MoviesList, MoviesListDTO } from "../../models/movies.model";
import { truncateString } from "../../utils/string.utils";
import { toLocaleDateString } from "../../utils/date.utils";

export class MappingService {
  public static mapMoviesDTOtoMovies(movies: MoviesListDTO[]): MoviesList[] {
    return movies.map((movie) => ({
      id: movie.id,
      overview: truncateString(movie.overview, 50) || 'No overview',
      popularity: movie.popularity,
      title: movie.original_title,
      thumbnail: movie.poster_path,
      release: toLocaleDateString(movie.release_date)
    }))
  }

  public static mapMovieDTOtoMovie(movie: MovieDTO): Movie {
    return {
      id: movie.id,
      overview: movie.overview || 'No overview',
      popularity: movie.popularity,
      language: movie.original_language,
      title: movie.original_title,
      thumbnail: movie.poster_path,
      genres: movie.genres.map(genre => genre.name),
      budget: movie.budget + '$',
      revenue: movie.revenue + '$',
      homepage: movie.homepage,
      country: movie.origin_country[0],
      productionCountries: movie.production_companies,
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
      release: toLocaleDateString(movie.release_date)
    }
  }

  public static countryMapper: { [abbreviation: string]: string } = {
    'us': 'United States',
    'cn': 'China',
    'in': 'India',
    'id': 'Indonesia',
    'pk': 'Pakistan',
    'br': 'Brazil',
    'ng': 'Nigeria',
    'bd': 'Bangladesh',
    'mx': 'Mexico',
    'ph': 'Philippines',
    'vn': 'Vietnam',
    'et': 'Ethiopia',
    'eg': 'Egypt',
    'cd': 'Democratic Republic of the Congo',
    'th': 'Thailand',
    'fr': 'France',
    'de': 'Germany',
    'tr': 'Turkey',
    'gb': 'United Kingdom',
    'it': 'Italy',
    'ua': 'Ukraine'
  };

  public static getCountryFullName(abbreviation: string): string | undefined {
    return this.countryMapper[abbreviation];
  }
}
