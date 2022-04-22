/**
 * Input: ops = ["5","2","C","D","+"]
 * Output: 30
 * Explanation:
 * 1. '5' add 5 to the record, [5]
 * 2. '2' add 2 to the record, [5, 2]
 * 3. 'C' invalidate and remove the previous score, [5]
 * 4. 'D' add 2*5 to the record, [5, 10]
 * 5. '+' add 5+10=15 to the record, [5, 10, 15]
 * 6. the total sum is 5 + 10 + 15 = 30
 */
function calPoints(ops) {
  let stack = [];
  let sum = 0;
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'C') {
      stack.pop();
    } else if (ops[i] === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (ops[i] === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(parseInt(ops[i]));
    }
  }
  for (let i = 0; i < stack.length; i++) {
    sum += stack[i];
  }
  return sum;
}

console.log(calPoints(['5', '2', 'C', 'D', '+']));
