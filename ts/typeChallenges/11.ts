// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md

type TupleToObject<T extends readonly any[] = {
  [P in T[number]]: P
}