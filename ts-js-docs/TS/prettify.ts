import type { BigObject } from './types';

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

type BigExample = BigObject

type Intersected = { a: string } & { b: number } & { c: boolean } & { d: number[]};

type Example = Prettify<Intersected>;