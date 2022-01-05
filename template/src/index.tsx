import React from 'react';

import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '~/store';
import { App } from '~/view/components/App';

const RootApp: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <App />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default RootApp;
