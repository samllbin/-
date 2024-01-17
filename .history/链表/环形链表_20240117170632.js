function detectCycle(head) {
  if (!head || !head.next) return null;
  let slow = head.next,
    fast = head.next.next;
  while (fast && fast.next && slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (!fast || !fast.next) return null;
  while (head !== fast) {
    head = head.next;
    fast = fast.next;
  }
  return head;
}
