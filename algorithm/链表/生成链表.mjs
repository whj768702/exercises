class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
export default function initList(length) {
  let result = new ListNode(0);
  let header = result;
  for (let i = 1; i < length; i++) {
    header.next = new ListNode(i);
    header = header.next;
  }
  return result;
}
const result = initList(4);
console.log(result);