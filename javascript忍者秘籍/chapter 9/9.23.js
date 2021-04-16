/**
 * 差集 只包含存在于集合A但不在集合B中的元素
 */
const ninjas = ['Kuma', 'Hattori', 'Yagyu'];
const samurai = ['Hattori', 'Oda', 'Tomoe'];

const warriors = new Set(ninjas.filter(ninja => !samurai.includes(ninja)));

console.log(warriors);