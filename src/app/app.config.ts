import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "./core/api/auth.interceptor";
import { AppStateEffects } from "./store/app-state/app-state.effects";
import { provideStore } from "@ngrx/store";
import { reducers } from "./store/reducer";
import { provideEffects } from "@ngrx/effects";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MessageService } from "primeng/api";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers),
    provideAnimationsAsync(),
    MessageService,
    provideEffects([AppStateEffects]),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        // errorHandlingInterceptor,
      ]),
    )]
};
