export interface MoviesListResponseDTO {
  results: MoviesListDTO[];
  pages: number;
  total_pages: number;
  total_results: number;
}

export interface MoviesListDTO {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesList {
  id: number;
  overview?: string;
  popularity: number;
  language: string;
  title: string;
  thumbnail: string;
  release: string;
}

export interface MovieDTO extends MoviesListDTO {
  budget: number;
  genres: Genres[];
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  production_companies: any;
}

interface Genres {
  id: number;
  name: string;
}

export interface Movie extends MoviesList {
  genres: string[],
  budget: string,
  revenue: string,
  homepage: string,
  country: string,
  productionCountries: any,
  voteAverage: number,
  voteCount: number
}
