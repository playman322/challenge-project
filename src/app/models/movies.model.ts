export interface MoviesResponseDTO {
  results: MovieDTO[];
  pages: number;
  total_pages: number;
  total_results: number;
}

export interface MovieDTO {
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
  budget: number;
  genres: Genres[];
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
}

interface Genres {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  popularity: number;
  title: string;
  thumbnail: string;
  release: string;
  language: string;
  voteAverage: number,
  voteCount: number
  overview?: string;
  isFavorite?: boolean;
  genres?: string[],
  budget?: string,
  revenue?: string,
  homepage?: string,
  country?: string,
}
