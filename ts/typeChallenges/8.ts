// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.zh-CN.md

type MyReadonly<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;
