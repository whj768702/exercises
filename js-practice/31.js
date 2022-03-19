function maxNumber(x, y, z) {
  const temp = x > y ? x : y;
  return temp > z ? temp : z;
}

console.log(maxNumber(1, 0, 1));
console.log(maxNumber(0, -10, -20));
console.log(maxNumber(1000, 510, 440));