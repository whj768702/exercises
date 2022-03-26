function promiseFn(value) {
  return new Promise((resolve) => {
    resolve(value);
  });
}

function* generator(value) {
  const result1 = yield promiseFn(value);
  console.log('result1: ', result1);
  const result2 = yield promiseFn(result1);
  console.log('result2: ', result2);
  const result3 = yield promiseFn(result2);
  console.log('result3: ', result3);
  return result3;
}
const gen = generator(100);
console.log(gen.next(200).value);
console.log(gen.next(300).value);
console.log(gen.next(400).value);
console.log(gen.next(500).value);
console.log(gen.next(600).value);
