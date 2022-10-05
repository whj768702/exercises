// https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.zh-CN.md

type Length<T extends readonly string[]> = T['length'];

type test = ['a', 'b', 'c'];

type testLength = Length<test>; // type testLength = 3
