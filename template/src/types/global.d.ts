declare type Nullable<T> = T | null;

declare interface DynamicObject<T> {
  [key: string]: T;
}

declare type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

declare type PartialType<T> = {
  [P in keyof T]?: T[P];
};
