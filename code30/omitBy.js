const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k]))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(
  omitBy({ a: 1, b: "2", c: 3, d: -0 }, (x) => typeof x === "number")
); // { b: '2' }
