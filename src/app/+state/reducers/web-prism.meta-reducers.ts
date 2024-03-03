import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { WebPrismStateSlices } from 'src/app/types/enums/web-prism-state-slices';

export function sessionStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      {
        [WebPrismStateSlices.UserManagement]: ['something'],
      },
    ],
    storage: localStorage,
    rehydrate: true,
  })(reducer);
}
