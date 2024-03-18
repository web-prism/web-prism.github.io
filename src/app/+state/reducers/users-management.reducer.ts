import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/types/models/user';
import { UserManagementApiActions } from '../actions';

export interface UsersManagementState {
  users: User[];
}

export const initialState: UsersManagementState = {
  users: [],
};

export const usersManagementReducer = createReducer(
  initialState,
  on(
    UserManagementApiActions.getUsersSuccess,
    (state, { users }): UsersManagementState => {
      return {
        ...state,
        users,
      };
    }
  )
);
