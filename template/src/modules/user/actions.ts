import { createAction } from 'deox';

import { UserProfileModel } from '~/models/user';

export const setUser = createAction(
  'user/SET_USER',
  resolve => (payload: UserProfileModel) => resolve(payload),
);

export const setAuth = createAction(
  'user/SET_AUTH',
  resolve => (payload: Nullable<{ access: string; refresh: string }>) => resolve(payload),
);

export const signOut = createAction('user/SIGN_OUT');
