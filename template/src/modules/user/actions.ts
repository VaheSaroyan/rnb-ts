import { createAction } from '@reduxjs/toolkit';

import { UserProfileModel } from '~/models/user';

import { UserAuth } from './types';

export const setUser = createAction<UserProfileModel>('user/SET_USER');

export const setAuth = createAction<Nullable<UserAuth>>('user/SET_AUTH');

export const signOut = createAction('user/SIGN_OUT');
