import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MiscPageActions } from '../+state/actions';

export function loaderInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const store = inject(Store);
  let requestsCount = 0;

  requestsCount++;

  if (requestsCount === 1) {
    store.dispatch(MiscPageActions.toggleLoader({ isLoaderShown: true }));
  }

  return next(req).pipe(
    finalize(() => {
      requestsCount--;

      if (requestsCount === 0) {
        store.dispatch(MiscPageActions.toggleLoader({ isLoaderShown: false }));
      }
    })
  );
}
