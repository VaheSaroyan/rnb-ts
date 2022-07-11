import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { createMigrate, createTransform, persistReducer } from 'redux-persist';
import { MigrationManifest } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

import packageJson from '../../package.json';

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

const migrations: MigrationManifest = {
  0: state => (state ? { _persist: state._persist } : state),
};

const rootPersistConfig = {
  key: packageJson.name,
  storage: AsyncStorage,
  whitelist: ['user'],
  transforms,
  version: 0,
  migrate: createMigrate(migrations),
};

const appReducer = combineReducers({
  user: userReducer,
});

const reducer: typeof appReducer = (state, action) => {
  if (action.type === resetStore) {
    state = undefined;
  }
  return appReducer(state, action);
};

export const rootReducer = persistReducer<ReturnType<typeof reducer>>(rootPersistConfig, reducer);
