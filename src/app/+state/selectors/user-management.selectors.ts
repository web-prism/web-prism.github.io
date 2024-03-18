import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WebPrismStateSlices } from 'src/app/types/enums/web-prism-state-slices';
import { UserManagementState } from '../reducers/user-management.reducer';

export const selectUserManagementState =
  createFeatureSelector<UserManagementState>(
    WebPrismStateSlices.UserManagement
  );

export const selectUsers = createSelector(
  selectUserManagementState,
  ({ users }) => users
);
