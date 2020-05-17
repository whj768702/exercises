const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];
const arr = [1, 2, 2, 3, 4];
console.log(remove(arr, (n) => n % 2 === 0));
