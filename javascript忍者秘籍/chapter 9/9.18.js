const directory = new Map();

directory.set('Yoshi', '1');
directory.set('Kuma', '2');
directory.set('Hiro', '3');

for (let item of directory) {
  console.log(item); // ['Yoshi', '1']...
}

for (let key of directory.keys()) {
  console.log('key: ', key);
}

for (let value of directory.values()) {
  console.log('value: ', value);
}
