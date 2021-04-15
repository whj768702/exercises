/**
 * 通过setter校验赋值
 */
function Ninja() {
  let _skillLevel = 0;

  Object.defineProperty(this, 'skillLevel', {
    get: () => _skillLevel,
    set: value => {
      if (!Number.isInteger(value)) {
        throw new TypeError('Skill level should be a number');
      }
      _skillLevel = value;
    }
  })
}

const ninja = new Ninja();
ninja.skillLevel = 10;
console.log(ninja.skillLevel);
ninja.skillLevel = 'a'; // type error
