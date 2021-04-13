const yoshi = { skulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };

console.log(yoshi.sneak);
Object.setPrototypeOf(yoshi, hattori);
console.log(yoshi.sneak);
// 循环依赖会报错 TypeError: Cyclic __proto__ value
// Object.setPrototypeOf(hattori, yoshi);