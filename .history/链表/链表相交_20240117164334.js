function getLen(head) {
  let cur = head;
  let len = 0;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
}
var getIntersectionNode = function (headA, headB) {
  let curA = headA,
    curB = headB;
  let lenA = getLen(headA);
  let lenB = getLen(headB);

  if (lenA < lenB) {
    [headA, headB] = [headB, headA];
    [lenA, lenB] = [lenB, lenA];
  }
  for (let i = 0; i < lenA - lenB; i++) {
    curA = curA.next;
  }

  while (curA !== curB && curA) {
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};
