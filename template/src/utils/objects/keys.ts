export function keys<T>(obj: T): (keyof T)[] {
  // @ts-ignore
  return Object.keys(obj);
}
