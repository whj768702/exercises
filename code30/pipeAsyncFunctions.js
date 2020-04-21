// performs left-to-right function composition for asynchronous functions.

const pipeAsyncFunctions = (...fns) => (arg) =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

const pipe2 = (...fns) => {
  return (arg) => {
    return fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
  };
};

const sum = pipe2(
  (x) => x + 1,
  (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),
  (x) => x + 3,
  async (x) => (await x) + 4
);
(async () => {
  console.log(await sum(5));
})();
