var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head.next,
    fast = head.next.next;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  while (head !== fast) {
    head = head.next;
    fast = fast.next;
  }
  return head;
};
