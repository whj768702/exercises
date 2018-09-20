// The handler.get() method is a trap for getting a property value.
const person = {
  name: '我',
  age: 28
}
const handler = {
  get(target, prop) {
    if (prop === 'age') {
      return 18;
    }
    return target[prop];
  }
};
const personProxy = new Proxy(person, handler);
console.log(person.age); // 28
console.log(personProxy.age); // 18