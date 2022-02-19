import { createReducer } from 'deox';
import produce from 'immer';

import { AsyncStatus } from '~/types';

import { setAuth, setUser } from './actions';
import { UserState } from './types';

export const initialState: UserState = {
  profileStatus: AsyncStatus.IDLE,
  profile: null,
  auth: null,
};

export const userReducer = createReducer(initialState, handle => [
  handle(setUser, (state, { payload }) =>
    produce(state, draft => {
      draft.profile = payload;
    }),
  ),
  handle(setAuth, (state, { payload }) =>
    produce(state, draft => {
      draft.auth = payload;
    }),
  ),
]);
