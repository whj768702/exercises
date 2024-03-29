/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }
  let pre = head;
  const storeHead = head;
  head = head.next;
  while (head) {
    if (head.val === pre.val) {
      head = head.next;
      pre.next = head;
    } else {
      pre = head;
      head = head.next;
    }
  }
  return storeHead;
};
// @lc code=end

