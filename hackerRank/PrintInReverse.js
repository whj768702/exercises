class SinglyLinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function initLink(arr) {
  let head = new SinglyLinkedList(arr[0]);
  let storeHead = head;
  for (let i = 1; i < arr.length; i++) {
    let node = new SinglyLinkedList(arr[i]);
    head.next = node;
    head = head.next;
  }
  return storeHead;
}
function print(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
function reverseList(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
let head = initLink([16, 12, 4, 2, 5]);
console.log('----------------before--------------');
print(head);
console.log('----------------after---------------');
let a = reverseList(head);
print(a);
