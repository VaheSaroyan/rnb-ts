import { useEffect } from 'react';

export function useMount(cb: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(cb, []);
}
