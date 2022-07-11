import { AppStateStatus, Platform, StatusBar, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { focusManager, QueryClientProvider } from 'react-query';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './src/store';
import { AppNavigator } from './src/view/navigation/App';

import { MyStorage } from '~/storage/asyncStorage/MyStorage';
import { queryClient } from '~/store/reactQurey';
import { Splash } from '~/view/components/molecules/Splash';

import { useOnlineManager, useAppState, useMount } from '~/view/hooks';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  /**
   * handle app is online or not
   */
  useOnlineManager();

  const onAppStateChange = (status: AppStateStatus) => {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  };
  /**
   * handle app state change
   */
  useAppState(onAppStateChange);

  /**
   * synchronize the storage with the async store
   */
  useMount(() => {
    MyStorage.sync();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator />
            <Splash />
          </SafeAreaProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
