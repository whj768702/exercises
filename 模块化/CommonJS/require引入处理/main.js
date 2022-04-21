const a = require('./a');
const b = require('./b');

console.log('我是main.js');

/**
 * 分析模块依赖，采用深度优先遍历
 * 1. main.js和a.js都引入了b.js模块，但b.js模块只执行一次。
 * 2. a.js模块和b.js模块互相引用，但是没有造成循环引用的情况。
 * 3. 执行顺序是: 父 -> 子 -> 父。
 */

// require实现大概原理
function mockRequire(id) {
  // 查找Module上有没有已经加载的js对象
  const cachedModule = Module._cache[id];

  // 如果已经加载过，直接返回
  if (cachedModule) {
    return cachedModule.exports;
  }

  // 创建当前模块的module
  const module = { exports: {}, loaded: false };

  // 将module挂载到Module._cache上，路径标识符作为id
  Module._cache[id] = module;

  // 加载文件
  runInThisContext(wrapper('module.exports = "123"'))(module.exports, require, module, __filename, __dirname);

  // 加载完成
  module.loaded = true;

  return module.exports;
}
