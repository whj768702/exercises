let person = {
  getGreeting() {
    return "Hello"
  }
}
let dog = {
  getGreeting() {
    return "Woof"
  }
}
let friend = {
  getGreeting() {
    return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!"
  }
}
// 将原型设置为 person
Object.setPrototypeOf(friend, person)
console.log(friend.getGreeting()) // "Hello, hi!"
console.log(Object.getPrototypeOf(friend) === person) // true
// 将原型设置为 dog
Object.setPrototypeOf(friend, dog)
console.log(friend.getGreeting()) // "Woof, hi!"
console.log(Object.getPrototypeOf(friend) === dog) // true

/* 使用super */
let friend2 = {
  getGreeting() {
    return super.getGreeting() + 'hi!';
  }
}
/*
let friend2 = {
  getGreeting: function() {
    return super.getGreeting() + 'hi!'; // error!!!!!1
  }
}
*/