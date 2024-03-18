import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/types/models/user';

export const getUsersSuccess = createAction(
  '[User management PAGE] Get users Success',
  props<{ users: User[] }>()
);

export const getUsersFailure = createAction(
  '[User management PAGE] Get users Failure',
  props<{ error: unknown }>()
);
