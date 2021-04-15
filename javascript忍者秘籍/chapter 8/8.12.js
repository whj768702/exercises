/**
 * 通过代理，实现arr[-1]负索引操作
 */
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

proxiedNinjas[-1] = undefined;
console.log(ninjas);