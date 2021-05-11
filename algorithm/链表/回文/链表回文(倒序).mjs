import { initList, initReverseList } from '../生成链表.mjs';

/**
 * 借助二叉树后序遍历的思路
 * 核心逻辑：实际上是把链表节点放入一个栈，然后再拿出来，这时候元素顺序就是反的
 * 时间和空间复杂度都是O(N)
 */

function traverse(right) {
  if (right === null) {
    return true;
  }
  let res = traverse(right.next);
  res = res && (right.data === left.data);
  left = left.next;
  return res;
}

let left;
function isPalindrome(head) {
  left = head;
  return traverse(head);
}

let listNode1 = initList(5);
const listNode2 = initReverseList(5);
const head = listNode1;

while (listNode1.next) {
  listNode1 = listNode1.next;
}
listNode1.next = listNode2;
console.log(isPalindrome(head));