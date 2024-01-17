function getLen(head) {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
}
var getIntersectionNode = function (headA, headB) {
  let lenA = getLen(headA);
  let lenB = getLen(headB);

  if (lenA >= lenB) {
    let diff = lenA - lenB;
    while (diff--) {
      headA = headA.next;
    }
  } else {
    let diff = lenB - lenA;
    while (diff--) {
      headB = headB.next;
    }
  }

  while (headA && headB) {
    if (headA === headB) return headA;
    headA = headA.next;
    headB = headB.next;
  }
};
