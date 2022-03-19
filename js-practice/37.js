// Write a JavaScript program to create new string with first 3 characters
// are in lower case. If the string length is less than 3 convert all
// the characters in upper case.
function formatStr(str) {
  if (str.length<3) {
    return str.toUpperCase();
  } else {
    return str.slice(0, 3).toLowerCase() + str.slice(3);
  }
}

console.log(formatStr("Python"));
console.log(formatStr("Py"));
console.log(formatStr("JAVAScript"));