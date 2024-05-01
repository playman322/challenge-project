import { MappingService } from './mapping.service';
import { MovieDTO } from '../../models/movies.model';

describe('MappingService', () => {
  it('should map movies DTO to movies', () => {
    const moviesDTO: MovieDTO[] = [
      {
        backdrop_path: "",
        adult: false,
        imdb_id: "",
        id: 1,
        overview: 'Movie overview',
        popularity: 7.5,
        original_title: 'Movie Title',
        poster_path: 'movie_poster.jpg',
        release_date: "2018-09-19",
        vote_average: 8.0,
        vote_count: 1000,
        original_language: 'en',
        genres: [{ id: 1, name: 'Action' }],
        budget: 1000000,
        revenue: 5000000,
        homepage: 'https://www.movie.com',
        origin_country: ['US']
      },
    ];
    const mappedMovies = MappingService.mapMoviesDTOtoMovies(moviesDTO);
    expect(mappedMovies.length).toBe(1);
    expect(mappedMovies[0].id).toBe(1);
    expect(mappedMovies[0].overview).toBe('Movie overview');
    expect(mappedMovies[0].popularity).toBe(7.5);
    expect(mappedMovies[0].title).toBe('Movie Title');
    expect(mappedMovies[0].thumbnail).toBe('movie_poster.jpg');
    expect(mappedMovies[0].release).toBe('Sep 19, 2018');
    expect(mappedMovies[0].voteAverage).toBe(8.0);
    expect(mappedMovies[0].voteCount).toBe(1000);
    expect(mappedMovies[0].language).toBe('en');
  });

  it('should map movie DTO to movie', () => {
    const movieDTO: MovieDTO = {
      backdrop_path: "",
      adult: false,
      imdb_id: "",
      id: 1,
      overview: 'Movie overview',
      popularity: 7.5,
      original_title: 'Movie Title',
      poster_path: 'movie_poster.jpg',
      release_date: "2018-09-19",
      vote_average: 8.0,
      vote_count: 1000,
      original_language: 'en',
      genres: [{ id: 1, name: 'Action' }],
      budget: 1000000,
      revenue: 5000000,
      homepage: 'https://www.movie.com',
      origin_country: ['US']
    };

    const mappedMovie = MappingService.mapMovieDTOtoMovie(movieDTO);
    expect(mappedMovie.id).toBe(1);
    expect(mappedMovie.overview).toBe('Movie overview');
    expect(mappedMovie.popularity).toBe(7.5);
    expect(mappedMovie.title).toBe('Movie Title');
    expect(mappedMovie.thumbnail).toBe('movie_poster.jpg');
    expect(mappedMovie.genres).toEqual(['Action']);
    expect(mappedMovie.budget).toBe('1000000$');
    expect(mappedMovie.revenue).toBe('5000000$');
    expect(mappedMovie.homepage).toBe('https://www.movie.com');
    expect(mappedMovie.country).toBe('US');
    expect(mappedMovie.voteAverage).toBe(8.0);
    expect(mappedMovie.voteCount).toBe(1000);
    expect(mappedMovie.release).toBe('Sep 19, 2018');
    expect(mappedMovie.isFavorite).toBe(false);
  });
});
