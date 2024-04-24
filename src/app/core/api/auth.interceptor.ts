import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, tap, throwError } from 'rxjs';
// import { Store } from '../../store/store';
// import { getState } from '@ngrx/signals';
import { environment } from "../../environments/environment";
import { log } from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  // if (store.token() !== null) {
    req = cloneWithToken(req, environment.accessToken);
  // }

  console.log(req);
  return next(req).pipe(
    catchError((error) => {
      // if (store.isTokenExpired()) {
      //   if (store.refreshToken() === null) {
      //     return next(req);
      //   }
      //
      //   return store.refreshTokenRx(store.refreshToken()!).pipe(
      //     switchMap(() => {
      //       const requestWithToken = cloneWithToken(req, store.token()!);
      //
      //       return next(requestWithToken);
      //     }),
      //   );
      // }

      return throwError(() => error);
    }),
  );
}

function cloneWithToken(request: HttpRequest<any>, authToken: string) {
  return request.clone({
    setHeaders: {
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  });
}
