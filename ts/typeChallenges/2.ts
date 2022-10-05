// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.zh-CN.md

type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never;

const fn = (v: boolean) => {
  if (v) {
    return 1;
  } else {
    return 2;
  }
};

// type FnType = typeof fn
// type FnType = (v: boolean) => 1 | 2

type a = MyReturnType<typeof fn>;
