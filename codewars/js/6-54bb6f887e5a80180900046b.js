// Find the length of the longest substring in the given string s that is the same in reverse.
//  As an example,
// if the input was“ I like racecars that go fast”, the substring(racecar) length would be 7.
// If the length of the input string is 0, the
// return value must be 0.

function longestPalindrome(str) {
  if(!str.length) {
    return 0;
  }
  let len = str.length;
  let maxLength = 0;
  let tempStr = '';

  for(let i=0;i<len;i++){
    for(let j=i+1;j<=len;j++){
      tempStr= str.slice(i,j);
      if(tempStr === tempStr.split('').reverse().join('')&&maxLength<tempStr.length) {
        maxLength = tempStr.length;
      }
    }
  }
  return maxLength;
}

