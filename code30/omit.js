const omit = (obj, arr) =>
  Object.keys(obj).reduce(
    (acc, key) => (!arr.includes(key) && (acc[key] = obj[key]), acc),
    {}
  );
const omit2 = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omit({ a: 1, b: "2", c: 3 }, ["b"])); // { 'a': 1, 'c': 3 }
console.log(omit2({ a: 1, b: "2", c: 3 }, ["b"])); // { 'a': 1, 'c': 3 }
