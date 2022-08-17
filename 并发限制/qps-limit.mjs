function qpsLimit(requestPipe, limitMax = 3) {
  const requestPool = [];

  // 往池子里增加排队请求
  const add = () => {
    if (requestPipe.length === 0) {
      return;
    }
    let item = requestPipe.shift();
    requestPool.push(item);
    item.finally(() =>{
      // 当该请求完成后，从池子里移除该k求
      // 不能在后面run中移除，在run中执行后，已经无法定位到哪个请求完成了
      const index = requestPool.indexOf(item);
      if (index > -1) {
        requestPool.splice(index, 1);
      }
    });
  };

  // 执行池子里的请求
  const run = () => {
    if (requestPool.length === 0) {
      return;
    }

    console.log(`run start 当前池子中有 ${requestPool.length} 个请求`);
    let finish = Promise.race(requestPool);
    finish
      .then((res) => {})
      .catch()
      .finally(() => {
        console.log(`run over 当前池子中有 ${requestPool.length} 个请求`);

        // 一个请求完成后，继续执行池子里的请求，继续执行
        add();
        run();
      });
  };

  while (requestPool.length < limitMax) {
    // 初始化池子里的j求
    add();
  }

  // 启动池子里的请求的发送
  run();
}

function wait500(time = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, 1000 * time);
  });
}

const requests = [];

for (let i = 1; i < 10; i++) {
  requests.push(wait500(i));
}

console.log('------------start------------------');
qpsLimit(requests);
console.log('------------ end ------------------');
