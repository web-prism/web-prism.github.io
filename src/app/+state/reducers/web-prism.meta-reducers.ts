import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function sessionStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      // example
      // {
      //   [WebPrismStateSlices.UserManagement]: ['something'],
      // },
    ],
    storage: localStorage,
    rehydrate: true,
  })(reducer);
}
