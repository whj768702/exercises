function a() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ code: 100, data: [1, 2, 3] }), 2000);
  });
}
function b(a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + "b");
    }, 1000);
  });
}
function c(b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(b + "c");
    }, 1000);
  });
}

let result = [];
async function d() {
  try {
    console.log("d1");
    const res = await a();
    result = res.data[res.data.length - 1];
    console.log("d2");
  } catch (error) {
    console.log(error);
  }
}

async function e() {
  console.log("result1: ", result);
  await d();
  console.log("result2: ", result);
  const resultB = await b(result[0]);
  console.log("resultB: ", resultB);
}
e();
