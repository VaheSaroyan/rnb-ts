export function choose<U, K extends keyof U>(o: U, propNames: K[]): U[K][] {
  return propNames.map(n => o[n]);
}
