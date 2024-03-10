import { createReducer, on } from '@ngrx/store';
import { MiscPageActions } from '../actions';

export interface MiscState {
  isLoaderShown: boolean;
}

export const initialState: MiscState = {
  isLoaderShown: false,
};

export const miscReducer = createReducer(
  initialState,
  on(MiscPageActions.toggleLoader, (state, { isLoaderShown }): MiscState => {
    return {
      ...state,
      isLoaderShown,
    };
  })
);
