/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let result = new ListNode(-1);
  const storeHead = result;
  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      result.next = list2;
      list2 = list2.next;
    } else {
      result.next = list1;
      list1 = list1.next;
    }
    result = result.next;
  }
  if (list1 !== null) {
    result.next = list1;
  }
  if (list2 !== null) {
    result.next = list2;
  }

  return storeHead.next;
};
// @lc code=end

