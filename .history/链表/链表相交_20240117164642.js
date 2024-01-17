function getLen(head) {
  let cur = head;
  let len = 0;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
}
// 两个链表相交
// 思路：
// 1. 获取两个链表的长度
// 2. 长的链表先走差值步
// 3. 两个链表同时走，直到相遇
// 4. 返回相遇的节点
// 5. 判断两个链表是否相交
// 6. 返回相交的节点
var getIntersectionNode = function (headA, headB) {
  let curA = headA,
    curB = headB;
  let lenA = getLen(headA);
  let lenB = getLen(headB);

  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  for (let i = 0; i < lenA - lenB; i++) {
    curA = curA.next;
  }

  while (curA !== curB && curA) {
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};
