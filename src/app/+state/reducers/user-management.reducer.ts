import { createReducer } from '@ngrx/store';

export interface UserManagementState {
  something: string;
}

export const initialState: UserManagementState = {
  something: 'test',
};

export const userManagementReducer = createReducer(initialState);
