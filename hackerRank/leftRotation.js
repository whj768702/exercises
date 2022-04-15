// https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true

function rotateLeft(d, arr) {
  const result = arr.slice(d);
  result.push(...arr.slice(0, d));
  console.log(result);
}

rotateLeft(4, [1, 2, 3, 4, 5]);
