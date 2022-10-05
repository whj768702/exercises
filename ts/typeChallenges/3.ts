// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.zh-CN.md

type MyOmit1<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type MyOmit2<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
// 个人理解 K是否extends keyof T关系不大，K是不是T的key集合的子集都不影响
