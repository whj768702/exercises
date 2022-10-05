// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.zh-CN.md

type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'>;
// type Result = 'b'|'c'
