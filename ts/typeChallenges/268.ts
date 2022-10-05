// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.zh-CN.md

type If<C, T, F> = C extends true ? T : F;

/// type A = 'a'
type A = If<true, 'a', 'b'>;

// type B = 'b'
type B = If<false, 'a', 'b'>;
