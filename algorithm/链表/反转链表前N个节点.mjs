import initList from "./生成链表.mjs";

const listNode = initList(4);

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

const result = reverseN(listNode, 2);
console.log(result);