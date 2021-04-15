/**
 * 在class中使用getter和setter
 */
class NinjaCollection {
  constructor() {
    this.ninjas = ['Yoshi', 'Kuma', 'Hattori'];
  }

  get firstNinja() {
    // 在这里可以记录每次对ninjas[0]属性的访问
    return this.ninjas[0];
  }
  set firstNinja(value) {
    // 在这里可以记录每次对ninjas[0]属性的赋值
    this.ninjas[0] = value;
  }
}