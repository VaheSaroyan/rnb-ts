import NetInfo from '@react-native-community/netinfo';
import { Platform } from 'react-native';
import { onlineManager } from 'react-query';

import { useMount } from '~/view/hooks/useMount';

export function useOnlineManager() {
  useMount(() => {
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener(state => {
        onlineManager.setOnline(
          state.isConnected != null && state.isConnected && Boolean(state.isInternetReachable),
        );
      });
    }
  });
}
