// https://www.hackerrank.com/challenges/crush/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// 参考结果
// https://programs.programmingoneonone.com/2021/03/hackerrank-array-manipulation-solution.html

function arrayManipulation(n, queries) {
  const amounts = new Array(n);
  let max = 0;
  let current = 0;

  for (let i = 0; i < queries.length; i++) {
    const [start, end, k] = queries[i];
    const a = start - 1;
    amounts[a] = amounts[a] || 0;
    amounts[a] = amounts[a] + k;

    amounts[end] = amounts[end] || 0;
    amounts[end] = amounts[end] - k;
  }
  for (let i = 0; i < n; i++) {
    current += amounts[i] || 0;
    if (current > max) {
      max = current;
    }
  }
  return max;
}

console.log(
  arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ])
);
