/**
 * 通过Object.defineProperty定义getter和setter
 */
function Ninja() {
  let _skillLevel = 0;

  Object.defineProperty(this, 'skillLevel', {
    get: () => {
      // 在这里可以记录每次对skillLevel属性的访问
      return _skillLevel;
    },
    set: value => {
      // 在这里可以记录每次对skillLevel属性的赋值
      _skillLevel = value;
    }
  })
}