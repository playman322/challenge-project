import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { AuthToken } from "../../models/auth.model";

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send login request', () => {
    const mockAuthToken: AuthToken = { access_token: 'mockToken' };
    const username = 'testUser';
    const password = 'testPassword';

    service.login(username, password).subscribe((response) => {
      expect(response).toEqual(mockAuthToken);
    });

    const req = httpTestingController.expectOne('http://localhost:4201/api/auth/login');
    expect(req.request.method).toEqual('POST');
    req.flush(mockAuthToken);
  });

  it('should send register request', () => {
    const username = 'testUser';
    const email = 'test@example.com';
    const password = 'testPassword';

    service.register(username, email, password).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('http://localhost:4201/api/auth/register');
    expect(req.request.method).toEqual('POST');
    req.flush({});
  });
});
