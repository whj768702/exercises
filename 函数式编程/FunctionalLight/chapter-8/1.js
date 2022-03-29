// 普通求和
function sum(total, ...nums) {
  for (let num of nums) {
    total = total + num;
  }
  return total;
}

// 递归求和
function sum2(num1, ...nums) {
  if (nums.length === 0) return num1;
  return num1 + sum2(...nums);
}

// 尾递归
function sum3(result, num1, ...nums) {
  result = result + num1;
  if (nums.length === 0) return result;
  return sum3(result, ...nums);
}
console.log('sum3: ', sum3(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
