// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.zh-CN.md

type Unshift<T extends any[], U> = [U, ...T];
