function Person(name) {
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error('you must use new with Person');
  }
}
const person = new Person('hello');
const notAPerson = Person.call(person, 'world');// 报错