// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md

type First<T extends any[]> = T extends never[] ? never : T[0];
