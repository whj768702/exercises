function conditionallyStoreData(store, location, value, checkFn) {
  if (checkFn(value, store, location)) {
    store[location] = value;
  }
}
function notEmpty(val) {
  return val !== '';
}
function isUndefined(val) {
  return val === undefined;
}
function isPropUndefined(val, obj, prop) {
  return isUndefined(obj[prop]);
}
function storeData(store, location, value) {
  store[location] = value;
}

function saveComment(txt) {
  conditionallyStoreData(comments, comments.length, txt, notEmpty);
}
function trackEvent(evt) {
  conditionallyStoreData(events, events.name, evt, isPropUndefined);
}
