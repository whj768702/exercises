const obj = {
  name: 'obj',
};

const fn = () => {
  console.log('this: ', this);
};
fn();
const fnBind = fn.bind(obj);
fnBind();
fn.call(obj);
fn.apply(obj);
