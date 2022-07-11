import AsyncStorage from '@react-native-async-storage/async-storage';

import { name as appName } from '../../../app.json';

const MY_STORAGE_KEY_PREFIX = `@${appName}:`;
let dataMemory: { [key: string]: any } = {};

/** @class */
export class MyStorage {
  static syncPromise = null;
  /**
   * This is used to set a specific item in storage
   */
  static setItem(key: keyof typeof dataMemory, value: string) {
    AsyncStorage.setItem(MY_STORAGE_KEY_PREFIX + key, value);
    dataMemory[key] = value;
    return dataMemory[key];
  }

  /**
   * This is used to get a specific key from storage
   */
  static getItem(key: keyof typeof dataMemory) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
  }

  /**
   * This is used to remove an item from storage
   */
  static removeItem(key: keyof typeof dataMemory) {
    AsyncStorage.removeItem(MY_STORAGE_KEY_PREFIX + key);
    return delete dataMemory[key];
  }

  /**
   * This is used to clear the storage
   */
  static clear() {
    dataMemory = {};
    return dataMemory;
  }

  /**
   * Will sync the MyStorage data from AsyncStorage to storageWindow MyStorage
   */
  static sync() {
    if (!MyStorage.syncPromise) {
      // @ts-ignore
      MyStorage.syncPromise = new Promise((res, rej) => {
        AsyncStorage.getAllKeys((errKeys, keys) => {
          if (errKeys) {
            rej(errKeys);
          }
          // @ts-ignore
          const memoryKeys = keys.filter(key => key.startsWith(MY_STORAGE_KEY_PREFIX));
          AsyncStorage.multiGet(memoryKeys, (err, stores) => {
            if (err) {
              rej(err);
            }
            // @ts-ignore
            stores.map((result, index, store) => {
              const key = store[index][0];
              const value = store[index][1];
              const memoryKey = key?.replace(MY_STORAGE_KEY_PREFIX, '');
              // @ts-ignore
              dataMemory[memoryKey] = value;
            });
            // @ts-ignore
            res();
          });
        });
      });
    }
    return MyStorage.syncPromise;
  }
}
