// The handler.set() method is a trap for setting a property value.
const person = {
  name: '我',
  age: 28
}
const handler = {
  set(obj, prop, value) {
    if (prop === 'age' && value >= 30) {
      return console.log(`不到${value},还年轻着呢!`);
    }
    obj[prop] = value;
  }
}
const personProxy = new Proxy(person, handler);
personProxy.age = 30; // 不到30,还年轻着呢!
personProxy.age = 20; // 20