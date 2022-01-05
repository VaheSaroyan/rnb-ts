export function entries<T>(obj: T): [keyof T, any][] {
  // @ts-ignore
  return Object.entries(obj);
}
