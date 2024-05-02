import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authInterceptor } from "./core/api/auth.interceptor";
import { provideStore } from "@ngrx/store";
import { reducers } from "./store/reducer";
import { provideEffects } from "@ngrx/effects";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MessageService } from "primeng/api";
import { DetailsStateEffects } from "./store/details-state/details-state.effects";
import { ListStateEffects } from "./store/list-state/list-state.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers),
    provideAnimationsAsync(),
    MessageService,
    provideEffects([DetailsStateEffects, ListStateEffects]),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        // errorHandlingInterceptor,
      ]),
    )]
};
