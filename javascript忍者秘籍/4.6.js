// 函数调用和方法调用的差别

function whatsMyContext() {
  console.log(this);
  return this;
}

whatsMyContext(); // window

const getMyThis = whatsMyContext;
getMyThis(); // window

const ninja1 = {
  getMyThis: whatsMyContext
}
ninja1.getMyThis() === ninja1; // true
