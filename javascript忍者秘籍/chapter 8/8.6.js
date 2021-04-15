/**
 * 定义如何计算属性
 */
const shogun = {
  name: 'Yoshiaki',
  clan: 'Ashikaga',
  get fullTitle() {
    return `${this.name} ${this.clan}`;
  },
  set fullTitle(value) {
    const segments = value.split(' ');
    [this.name, this.clan] = segments;
  }
};

console.log(shogun.fullTitle); // Yoshiaki Ashikaga 
shogun.fullTitle = 'Ieyasu Tokuguwa';
console.log(shogun.fullTitle); // Ieyasu Tokuguwa

