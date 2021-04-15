/**
 * 代理的性能消耗 
 */
function measure(items) {
  const startTime = new Date().getTime();

  for (let i = 0; i < 500000; i++) {
    items[0] = 'Yoshi';
    items[1] = 'Kuma';
    items[2] = 'Hattori';
  }
  return new Date().getTime() - startTime;
}

function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, value) => {
      index = +index;
      return target[index < 0 ? target.length + index : index] = value;
    }
  });
}

const ninjas = ['Yoshi', 'Kuma', 'Hattori'];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

console.log('unproxy: ', measure(ninjas));
console.log('proxy: ', measure(proxiedNinjas));