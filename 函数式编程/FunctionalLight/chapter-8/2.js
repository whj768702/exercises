function maxEven1(...nums) {
  let maxNum = -Infinity;
  for (let num of nums) {
    if (num % 2 === 0 && num > maxNum) {
      maxNum = num;
    }
  }
  if (maxNum !== -Infinity) {
    return maxNum;
  }
}

function maxEven2(num1, ...restNums) {
  let maxRest = restNums.length > 0 ? maxEven2(...restNums) : undefined;

  return num1 % 2 !== 0 || num1 < maxRest ? maxRest : num1;
}

console.log('maxEven1:', maxEven1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('maxEven2:', maxEven2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
