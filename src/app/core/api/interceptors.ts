import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MessageBannerService } from "../../shared/services/message-banner.service";
import { MessageType } from "../../models/auth.model";

export function errorHandlingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const messageBannerService = inject(MessageBannerService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.message) {
        errorMessage = error.message;
      } else {
        errorMessage = 'An unknown error occurred!';
      }

      if (error.status) {
        errorMessage = errorMessage + error.status;
      }

      messageBannerService.displayMessage(errorMessage, MessageType.Error);

      return throwError(() => error);
    }),
  );
}
