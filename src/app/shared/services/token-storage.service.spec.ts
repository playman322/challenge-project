import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  let service: TokenStorageService;

  beforeEach(() => {
    service = new TokenStorageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save and retrieve token', () => {
    const token = 'test-token';
    service.saveToken(token);
    expect(service.getToken()).toEqual(token);
  });

  it('should save and retrieve user', () => {
    const user = 'test-user';
    service.saveUser(user);
    expect(service.getUser()).toEqual(user);
  });

  it('should clear local storage on sign out', () => {
    service.signOut();
    expect(service.getToken()).toEqual(null);

  });
});
