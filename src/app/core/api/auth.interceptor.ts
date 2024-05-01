import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorageService } from "../../shared/services/token-storage.service";

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  const tokenStorageService = inject(TokenStorageService);
  const token = tokenStorageService.getToken();

  if (token !== null) {
    req = cloneWithToken(req, token);
  }

  return next(req);
}

function cloneWithToken(request: HttpRequest<any>, token: string) {
  return request.clone({
    setHeaders: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
