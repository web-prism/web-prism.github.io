import { createAction, props } from '@ngrx/store';

export const toggleLoader = createAction(
  '[Loader interceptor PAGE] Toggle loader',
  props<{ isLoaderShown: boolean }>()
);
