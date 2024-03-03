import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { sessionStorageSyncReducer } from './+state/reducers/web-prism.meta-reducers';
import { provideEffects } from '@ngrx/effects';
import { webPrismEffects } from './+state/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { webPrismReducers } from './+state/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore(
      { router: routerReducer, ...webPrismReducers },
      {
        metaReducers: [sessionStorageSyncReducer],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
    provideEffects([...webPrismEffects]),
  ],
};
