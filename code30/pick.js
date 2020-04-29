const pick = (obj, arr) =>
  arr.reduce((acc, key) => (key in obj && (acc[key] = obj[key]), acc), {});

console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])); // { 'a': 1, 'c': 3 }
