import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';

import { name as appName } from './app.json';

import RootApp from './src';

if (__DEV__) {
  LogBox.ignoreAllLogs();
}

AppRegistry.registerComponent(appName, () => RootApp);
