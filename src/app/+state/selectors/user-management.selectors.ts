import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserManagementState } from '../reducers/user-management.reducer';
import { WebPrismStateSlices } from 'src/app/types/enums/web-prism-state-slices';

export const selectUserManagement = createFeatureSelector<UserManagementState>(
  WebPrismStateSlices.UserManagement
);

export const selectSomething = createSelector(
  selectUserManagement,
  ({ something }) => something
);
