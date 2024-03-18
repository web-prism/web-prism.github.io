import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserManagementService } from 'src/app/services/user-management.service';
import {
  UserManagementApiActions,
  UserManagementPageActions,
} from '../actions';

@Injectable()
export class UserManagementEffects {
  constructor(
    private actions$: Actions,
    private userManagementService: UserManagementService
  ) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserManagementPageActions.getUsers),
      mergeMap(() =>
        this.userManagementService.getUsers().pipe(
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
