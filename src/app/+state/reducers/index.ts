import { WebPrismStateSlices } from 'src/app/types/enums/web-prism-state-slices';
import { userManagementReducer } from './user-management.reducer';

export const webPrismReducers = {
  [WebPrismStateSlices.UserManagement]: userManagementReducer,
};
