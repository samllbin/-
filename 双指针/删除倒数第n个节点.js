var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let slow = dummy,
    fast = dummy;
  // 快慢指针，快指针先走n步
  // 快慢指针一起走，当快指针走到链表尾部时，慢指针正好在倒数第n个节点
  // 删除慢指针的下一个节点即可
  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return dummy.next;
};
