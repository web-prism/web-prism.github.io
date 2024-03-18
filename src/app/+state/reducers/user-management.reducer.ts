import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/types/models/user';
import { UserManagementApiActions } from '../actions';

export interface UserManagementState {
  users: User[];
}

export const initialState: UserManagementState = {
  users: [],
};

export const userManagementReducer = createReducer(
  initialState,
  on(
    UserManagementApiActions.getUsersSuccess,
    (state, { users }): UserManagementState => {
      return {
        ...state,
        users,
      };
    }
  )
);
