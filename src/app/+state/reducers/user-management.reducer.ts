import { createReducer, on } from '@ngrx/store';

export interface UserManagementState {
  something: string;
}

export const userManagementState: UserManagementState = {
  something: 'test',
};

export const userManagementReducer = createReducer(userManagementState);
