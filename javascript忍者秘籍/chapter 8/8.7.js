/**
 * 通过Proxy构造器创建代理
 */
const emperor = { name: 'Komei' };
const representative = new Proxy(emperor, {
  get: (target, key) => {
    // 可记录对属性的读操作
    return key in target ? target[key] : 'Do not bother the emperor!';
  },
  set: (target, key, value) => {
    target[key] = value;
  }
});

console.log('name: ', emperor.name);
console.log('through a proxy name: ', representative.name);


console.log('nickname: ', emperor.nickname); // undefined
console.log('through a proxy nickname: ', representative.nickname); // Do not bother the emperor!

emperor.nickname = 'Tenno';
console.log('nickname: ', emperor.nickname); // Tenno
console.log('through a proxy nickname: ', representative.nickname); // Tenno


representative.nickname = 'Tenno Proxy';
console.log('nickname: ', emperor.nickname); // Tenno Proxy
console.log('through a proxy nickname: ', representative.nickname); // Tenno Proxy