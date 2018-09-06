// Write a JavaScript program to create a new string from
// a given string taking the last 3 characters and added at
// both the front and back. The string length must be 3 or more.

function newString(str) {
  if(str.length >= 3) {
    const s = str.slice(-3);
    return s + str + s;
  } else {
    return false;
  }
}
console.log(newString("abc"));
console.log(newString("ab"));
console.log(newString("abcd"));