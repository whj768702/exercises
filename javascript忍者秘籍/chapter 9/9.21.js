/**
 * 并集 同时包含集合A和B中所有的元素
 */
const ninjas = ['Kuma', 'Hattori', 'Yagyu'];
const samurai = ['Hattori', 'Oda', 'Tomoe'];

const warriors = new Set([...ninjas, ...samurai]);

console.log(warriors);