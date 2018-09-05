// Write a JavaScript program to create a new string from a given string
// with the first character of the given string added at the front and back.

function newString(str) {
  // const firstChart = str.charAt(0);
  const firstChart = str.slice(0, 1);
  return firstChart + str + firstChart;
}
console.log(newString('abc'));