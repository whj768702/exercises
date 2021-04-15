/**
 * 自我实现getter和setter保护私有变量
 */
function Ninja() {
  let skillLevel;

  this.getSkillLevel = () => {
    // 在这里可以记录每次对skillLevel属性的访问
    return skillLevel;
  }

  this.setSkillLevel = value => {
    // 在这里可以记录每次对skillLevel属性的赋值
    skillLevel = value;
  }
}

const ninja = new Ninja();
ninja.setSkillLevel(100);
console.log(ninja.getSkillLevel());
console.log(ninja);