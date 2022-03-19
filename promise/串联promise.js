function sleep(time = 1) {
  return new Promise((resolve) =>
    setTimeout(function () {
      console.log('promise resolve: ', time);
      resolve(time);
    }, time * 1000)
  );
}

const promiseCreatorList = [sleep, sleep, sleep];

// 三个promise都完成后返回
console.log('Promise.all start', new Date().getTime());
Promise.all(promiseCreatorList.map((item) => item(3))).then(() => {
  console.log('Promise.all end', new Date().getTime());
});

// 一次执行
async function main() {
  console.log('for of async start ', new Date().getTime());
  async function forOfLoop() {
    for (const item of promiseCreatorList) {
      await item(3);
    }
  }
  await forOfLoop();
  console.log('for of async end ', new Date().getTime());
}
main();

// 串联promise数组
const promiseChain = promiseCreatorList.reduce((prev, curr) => {
  if (prev.then) {
    return prev.then(curr);
  }
  return prev().then(curr);
});
console.log('promiseChain start', new Date().getTime());
promiseChain.then(function () {
  console.log('promiseChain end', new Date().getTime());
});

console.log('promiseChain2 start', new Date().getTime());
const promiseChain2 = promiseCreatorList.reduce((prev, curr, curIndex) => {
  return prev.then(curr(curIndex + 1));
}, Promise.resolve(2));

promiseChain2.then(function (data) {
  console.log('promiseChain2: ', data);
});
