/**
 * 交集 只包含集合A和B中同时出现的元素/**
 */
const ninjas = ['Kuma', 'Hattori', 'Yagyu'];
const samurai = ['Hattori', 'Oda', 'Tomoe'];

const warriors = new Set(ninjas.filter(ninja => samurai.includes(ninja)));

console.log(warriors);