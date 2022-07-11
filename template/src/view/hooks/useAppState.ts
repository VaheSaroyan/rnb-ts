import { useEffect } from 'react';

import { AppState, AppStateStatus } from 'react-native';

export function useAppState(onAppStateChange: (state: AppStateStatus) => void) {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, [onAppStateChange]);
}
