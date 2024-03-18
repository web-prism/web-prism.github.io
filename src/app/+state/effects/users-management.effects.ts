import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UsersManagementService } from 'src/app/services/users-management.service';
import {
  UserManagementApiActions,
  UserManagementPageActions,
} from '../actions';

@Injectable()
export class UsersManagementEffects {
  constructor(
    private actions$: Actions,
    private usersManagementService: UsersManagementService
  ) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserManagementPageActions.getUsers),
      mergeMap(() =>
        this.usersManagementService.getUsers().pipe(
          map((users) => {
            return UserManagementApiActions.getUsersSuccess({
              users,
            });
          }),
          catchError((error: unknown) => {
            return of(
              UserManagementApiActions.getUsersFailure({
                error,
              })
            );
          })
        )
      )
    );
  });
}
