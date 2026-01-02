import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';

import { provideStoreDevtools } from "@ngrx/store-devtools"

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideRouterStore(),
    provideStore(),

    provideStoreDevtools()
  ]
};
