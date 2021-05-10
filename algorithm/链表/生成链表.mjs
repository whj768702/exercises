class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function initList(length) {
  let result = new ListNode(1);
  let header = result;
  for (let i = 1; i < length; i++) {
    header.next = new ListNode(i + 1);
    header = header.next;
  }
  return result;
}

function initReverseList(length) {
  let result = new ListNode(length);
  let header = result;
  for (let i = length; i > 0; i--) {
    header.next = new ListNode(i - 1);
    header = header.next;
  }
  return result;
}

export {
  initList,
  initReverseList,
}