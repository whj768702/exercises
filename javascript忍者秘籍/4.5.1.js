function Ninja() {
  this.whoAmI = () => this;
}
let ninja1 = new Ninja();
let ninja2 = {
  whoAmI: ninja1.whoAmI
}

console.log(ninja1.whoAmI())
console.log(Ninja)