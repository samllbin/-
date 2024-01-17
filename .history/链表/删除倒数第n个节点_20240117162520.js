var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let slow = dummy,
    fast = dummy;
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
