let node = {
  type: 'hello',
  name: 'w'
};
function outputInfo(value) {
  console.log(value);
}
outputInfo({type, name} = node);