import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DetailsService } from './details.service';
import { environment } from "../../environments/environment";

describe('DetailsService', () => {
  let service: DetailsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DetailsService]
    });
    service = TestBed.inject(DetailsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should retrieve movie details', () => {
    const movieId = 507076;
    const mockMovie = {
      id: 507076,
      overview: "When a dance troupe is lured to an empty school, a bowl of drug-laced sangria causes their jubilant rehearsal to descend into a dark and explosive nightmare as they try to survive the night—and find who's responsible—before it's too late.",
      popularity: 45.057,
      language: "fr",
      title: "Climax",
      thumbnail: "/47IXH2iEWwX0F7vIyGXaKQ0psBG.jpg",
      genres: [
        "Horror",
        "Drama"
      ],
      budget: "2900000$",
      revenue: "1700000$",
      homepage: "https://a24films.com/films/climax",
      country: "FR",
      voteAverage: 7.088,
      voteCount: 1978,
      release: "Sep 19, 2018",
    }

    service.getMovie(movieId).subscribe(movie => {
      expect(movie).toEqual(mockMovie);
    });

    const req = httpTestingController.expectOne(`${environment.apiUrl}/3/movie/${movieId}?language=en-US&api_key=${environment.apiKey}`);
    req.flush(mockMovie);
  });
});
