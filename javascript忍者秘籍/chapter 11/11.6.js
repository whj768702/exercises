/**
 * 在模块最后一行导出
 */
const ninja = 'Yoshi';
const message = 'Hello';

function sayHiToNinja() {
  return message + ' ' + ninja;
}

export { message, sayHiToNinja };