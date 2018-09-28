const debounce = function (func, wait, immediate) {
  let timeout;
  let args;
  let context;
  let timestamp;
  let result;

  const later = function () {
    let last = (new Date()).getTime() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      }
    }
  };

  return function () {
    context = this;
    args = arguments;
    timestamp = (new Date()).getTime();
    let callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
    return result;
  }
}

function print(abc) {
  console.log('abc: ', abc);
}

debounce(print, 1000, false)('123123');
debounce(print, 1000, true)('123123');