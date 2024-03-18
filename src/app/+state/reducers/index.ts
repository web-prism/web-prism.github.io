import { WebPrismStateSlices } from 'src/app/types/enums/web-prism-state-slices';
import { miscReducer } from './misc.reducer';
import { usersManagementReducer } from './users-management.reducer';

export const webPrismReducers = {
  [WebPrismStateSlices.UsersManagement]: usersManagementReducer,
  [WebPrismStateSlices.Misc]: miscReducer,
};
