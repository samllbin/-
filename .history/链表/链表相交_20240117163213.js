function getLen(head) {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
}
var getIntersectionNode = function (headA, headB) {};
