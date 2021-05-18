const countMap = new Map();

function count(lo, hi) {
  if (lo > hi) {
    return 1;
  }
  if (countMap.has(`${lo}-${hi}`)) {
    return countMap.get(`${lo}-${hi}`);
  }
  let res = 0;
  for (let mid = lo; mid <= hi; mid++) {
    const left = count(lo, mid - 1);
    const right = count(mid + 1, hi);
    res += left * right;
  }
  countMap.set(`${lo}-${hi}`, res);

  return res;
}

const result = count(1, 3);
console.log(result);