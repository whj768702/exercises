/**
 * 通过立即执行函数扩展模块
 */
const MouseCounterModule = function () {
  let numClicks = 0;
  const handleClick = () => {
    console.log(++numClicks);
  }

  return {
    countClicks: () => {
      document.addEventListener('click', handleClick);
    }
  };
}();

(function (module) {
  let numScrolls = 0;
  const handleScroll = () => {
    console.log(++numScrolls);
  }

  module.countScrolls = () => {
    document.addEventListener('wheel', handleScroll);
  }
})(MouseCounterModule);
