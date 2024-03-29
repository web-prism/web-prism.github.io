import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { webPrismEffects } from './+state/effects';
import { webPrismReducers } from './+state/reducers';
import { sessionStorageSyncReducer } from './+state/reducers/web-prism.meta-reducers';
import { appRoutes } from './app.routes';
import { loaderInterceptor } from './interceptors/loader.interceptor';

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
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      HttpClientModule,
    ]),
    provideAnimationsAsync(),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    provideHttpClient(withInterceptors([loaderInterceptor])),
  ],
};
