function compose(...fns) {
  return function composed(result) {
    const list = [...fns];
    while (list.length > 0) {
      result = list.pop()(result);
    }
    return result;
  };
}

function skipFirst()
