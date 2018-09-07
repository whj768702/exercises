function nearest100(x, y) {
  return Math.abs(x - 100) > Math.abs(y - 100) ? y : x;
}

console.log(nearest100(90, 89));
console.log(nearest100(-90, -89));
console.log(nearest100(9, 90));