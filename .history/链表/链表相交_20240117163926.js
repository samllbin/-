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

  if (lenA < lenB) {
    [headA, headB] = [headB, headA];
    [lenA, lenB] = [lenB, lenA];
  }
  for (let i = 0; i < lenA - lenB; i++) {
    headA = headA.next;
  }

  while (headA !== headB && headA) {
    if (headA === headB) return headA;
    headA = headA.next;
    headB = headB.next;
  }
};
