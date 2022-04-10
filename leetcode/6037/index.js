/**
 * 给你一个正整数 num 。你可以交换 num 中 奇偶性 相同的任意两位数字（即，都是奇数或者偶数）。
 * 返回交换 任意 次之后 num 的 最大 可能值。
 * 输入：num = 1234
 * 输出：3412
 * 解释：交换数字 3 和数字 1 ，结果得到 3214 。
 * 交换数字 2 和数字 4 ，结果得到 3412 。
 * 注意，可能存在其他交换序列，但是可以证明 3412 是最大可能值。
 * 注意，不能交换数字 4 和数字 1 ，因为它们奇偶性不同。
 */
// 注意：是所有奇数或偶数交换对应位置，找到最大可能值
// 注意： 不是奇数位或者偶数位对应交换

const isOdd = (val) => val % 2 !== 0;
const isEven = (val) => val % 2 === 0;
const findMaxOdd = (arr) => arr.filter(isOdd).sort((a, b) => b - a)[0];
const getIndex = (arr, val) => arr.findIndex((item) => item === val);
const findMaxEven = (arr) => arr.filter(isEven).sort((a, b) => b - a)[0];

const largestInteger = function (num) {
  const numArr = num.toString().split('');
  const length = numArr.length;
  const middle = Math.floor(numArr.length / 2);
  for (let i = 0; i < length; ++i) {
    if (isOdd(numArr[i])) {
      const maxOddLeft = findMaxOdd(numArr.slice(i, length));
      const maxOddIndex = getIndex(numArr.slice(i, length), maxOddLeft);
      if (maxOddLeft > numArr[i]) {
        const temp = numArr[i];
        numArr[i] = maxOddLeft;
        numArr[maxOddIndex + i] = temp;
      }
    } else {
      const maxEvenLeft = findMaxEven(numArr.slice(i, length));
      const maxEvenIndex = getIndex(numArr.slice(i, length), maxEvenLeft);
      if (maxEvenLeft > numArr[i]) {
        const temp = numArr[i];
        numArr[i] = maxEvenLeft;
        numArr[maxEvenIndex + i] = temp;
      }
    }
  }
  return parseInt(numArr.join(''));
};

console.log('1234: ', largestInteger(1234));
console.log('65875: ', largestInteger(65875));
console.log('247: ', largestInteger(247));
