import { initList } from "./生成链表.mjs";

const listNode = initList(3);

function reverse(head) {
  if (!head.next) {
    return head;
  }
  // 取最后一个节点
  const last = reverse(head.next);
  // 这块把A->B转换成B->A
  head.next.next = head;
  head.next = null;
  return last;
}

const result = reverse(listNode);
console.log(result);