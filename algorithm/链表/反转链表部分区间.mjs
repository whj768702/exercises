import initList from "./生成链表.mjs";

let successor;

function reverseN(head, n) {
  if (n == 1) {
    successor = head.next;
    return head;
  }

  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;

  return last;
}

function reverseBetween(head, start, end) {
  if (start === 1) {
    return reverseN(head, end);
  }

  // start减1，对应的end位置也减1. start:2,end:4, start减1变成1，end的位置变成3
  head.next = reverseBetween(head.next, start - 1, end - 1);

  return head;
}

const listNode = initList(5);
const result = reverseBetween(listNode, 2, 3);
console.log(result);