// returns the target value in a nested JSON object,
// based on the given key.

const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

// examples
const data = {
  level1: {
    level2: {
      level3: 'some data',
    },
  },
};
console.log(dig(data, 'level2'));
