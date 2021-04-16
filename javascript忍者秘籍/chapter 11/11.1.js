/**
 *  通过立即执行函数创建模块
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
console.log(MouseCounterModule.numClicks); // undefined