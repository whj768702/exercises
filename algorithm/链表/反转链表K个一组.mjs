import initList from './生成链表.mjs';

function reverse(a, b) {
  let pre = null;
  let cur = a;
  let nxt = a;

  while (cur != b) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }

  return pre;
}
function reverseKGroup(head, k) {
  if (head === null) return null;
  let a = head;
  let b = head;
  for (let i = 0; i < k; i++) {
    if (b === null) return head;
    b = b.next;
  }
  let newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);

  return newHead;
}

const listNode = initList(4);
const result = reverseKGroup(listNode, 1);
console.log(result);