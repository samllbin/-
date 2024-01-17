var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  while (head !== fast) {
    head = head.next;
    fast = fast.next;
  }
};
