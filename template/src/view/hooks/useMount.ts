import React from 'react';

export function useMount(cb: () => void) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(cb, []);
}
