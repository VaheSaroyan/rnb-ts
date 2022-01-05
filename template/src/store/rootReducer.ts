import AsyncStorage from '@react-native-community/async-storage';

import { getType } from 'deox';
import { Action, combineReducers } from 'redux';
import { createTransform, persistReducer } from 'redux-persist';

import { RootState } from './types';

import { resetStore } from '~/modules/app/actions';
import { userReducer } from '~/modules/user/reducer';

const transforms = [
  createTransform(
    state => JSON.stringify(state),
    state =>
      JSON.parse(state, (key, value) =>
        typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
          ? new Date(value)
          : value,
      ),
  ),
];

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  transforms,
};

const appReducer = combineReducers({
  user: userReducer,
});

const reducer = (state: RootState | undefined, action: Action): RootState => {
  if (action.type === getType(resetStore)) {
    state = undefined;
  }
  return appReducer(state, action);
};

export const rootReducer = persistReducer(rootPersistConfig, reducer);
