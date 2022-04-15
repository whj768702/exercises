// https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function matchingStrings(strings, queries) {
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        ++count;
      }
    }
    result.push(count);
  }
  return result;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));
