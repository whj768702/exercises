// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.

function threeOrSeven(num) {
  return !(num%3)||!(num%7);
}

console.log(threeOrSeven(12));
console.log(threeOrSeven(14));
console.log(threeOrSeven(10));
console.log(threeOrSeven(11));
