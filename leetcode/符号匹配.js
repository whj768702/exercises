const isValid = function (s) {
  let stack = [];
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
      continue;
    }
    let concatStr = stack[stack.length - 1] + s[i];
    if (concatStr === '()' || concatStr === '[]' || concatStr === '{}') {
      stack.pop();
    } else {
      flag = false;
    }
  }
  return flag;
};
console.log(isValid('()'));
console.log(isValid('([)]'));
