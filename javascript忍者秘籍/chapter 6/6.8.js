/**
 * 向生成器发送数据以及从生成器接收数据
 */
function* NinjaGenerator(action) {
  const imposter = yield (`Hattori ${action}`);
  console.log('imposter: ', imposter); // 是下面next中带入的参数 Hanzo
  yield (`Yoshi ${imposter} ${action}`);
}

const ninjaIterator = NinjaGenerator('skulk');

const result1 = ninjaIterator.next();
console.log('result1: ', result1.value);

const result2 = ninjaIterator.next('Hanzo');
console.log('result2: ', result2.value);
