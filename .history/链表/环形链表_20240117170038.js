var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
};
