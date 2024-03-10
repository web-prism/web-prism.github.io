import { WebPrismStateSlices } from 'src/app/types/enums/web-prism-state-slices';
import { miscReducer } from './misc.reducer';
import { userManagementReducer } from './user-management.reducer';

export const webPrismReducers = {
  [WebPrismStateSlices.UserManagement]: userManagementReducer,
  [WebPrismStateSlices.Misc]: miscReducer,
};
