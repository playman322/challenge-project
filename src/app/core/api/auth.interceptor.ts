import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorageService } from "../../shared/services/token-storage.service";
import { Observable } from 'rxjs';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> {
  const tokenStorageService = inject(TokenStorageService);
  const token = tokenStorageService.getToken();

  if (token !== null) {
    req = cloneWithToken(req, token);
  }

  return next(req);
}

function cloneWithToken(request: HttpRequest<any>, token: string): HttpRequest<unknown> {
  return request.clone({
    setHeaders: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
