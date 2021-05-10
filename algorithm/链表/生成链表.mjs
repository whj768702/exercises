class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function initList(length) {
  let result = new ListNode(0);
  let header = result;
  for (let i = 1; i < length; i++) {
    header.next = new ListNode(i);
    header = header.next;
  }
  return result;
}

function initReverseList(length) {
  let result = new ListNode(length - 1);
  let header = result;
  for (let i = 1; i < length; i++) {
    header.next = new ListNode(length - i - 1);
    header = header.next;
  }
  return result;
}

export {
  initList,
  initReverseList,
}