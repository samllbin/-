var reverseList = function (head) {
  if (!head || !head.next) return head;
  let cur = head,
    pre = null,
    temp = null;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};
