// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.zh-CN.md

type Concat<T extends any[], U extends any[]> = [...T, ...U];

// type Result = [1,2]
type R = Concat<[1], [2]>;
