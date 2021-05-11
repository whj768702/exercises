import { initList, initReverseList } from '../生成链表.mjs';

function initPalindromeList(listLg1, listLg2) {
  let listNode1 = initList(listLg1);
  const listNode2 = initReverseList(listLg2);
  const head = listNode1;

  while (listNode1.next) {
    listNode1 = listNode1.next;
  }
  listNode1.next = listNode2;

  return head;
}

/**
 * 反转链表
 * @param a 
 * @returns 
 */
function reverse(a) {
  let pre = null;
  let cur = a;
  let nxt = a;

  while (cur !== null) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }

  return pre;
}

function isPalindrome(head) {
  // 通过【双指针技巧】中的快慢指针来找到链表的中点
  let slow, fast;
  slow = fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast !== null) {
    // 走到这说明链表长度是奇数
    slow = slow.next;
  }

  let left = head; // 0-1-2-3-4-5-4-3-2-1-0
  // 从slow处反转后半段链表
  let right = reverse(slow); // 0-1-2-3-4
  while (right != null) {
    if (left.data !== right.data) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
}

const head = initPalindromeList(5, 5); // 0-1-2-3-4-4-3-2-1-0
console.log(isPalindrome(head)); // true

const head2 = initPalindromeList(5, 7); // 0-1-2-3-4-6-5-4-3-2-1-0
console.log(isPalindrome(head2)); // false

const head3 = initPalindromeList(5, 6); // 0-1-2-3-4-5-4-3-2-1-0
console.log(isPalindrome(head3)); // true
