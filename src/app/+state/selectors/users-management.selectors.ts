import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WebPrismStateSlices } from 'src/app/types/enums/web-prism-state-slices';
import { UsersManagementState } from '../reducers/users-management.reducer';

export const selectUserManagementState =
  createFeatureSelector<UsersManagementState>(
    WebPrismStateSlices.UsersManagement
  );

export const selectUsers = createSelector(
  selectUserManagementState,
  ({ users }) => users
);
