import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WebPrismStateSlices } from 'src/app/types/enums/web-prism-state-slices';
import { MiscState } from '../reducers/misc.reducer';

export const selectMiscState = createFeatureSelector<MiscState>(
  WebPrismStateSlices.Misc
);

export const selectIsLoaderShown = createSelector(
  selectMiscState,
  ({ isLoaderShown }) => isLoaderShown
);
