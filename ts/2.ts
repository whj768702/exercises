type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

type Alias = { num: number}
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

let tuple1: [string, number] = ['abc', 123];

enum Week {
  up = 1,
  down,
  left
}
Week.down; // 2

declare function myPrint(n: number): number;
myPrint(123123);