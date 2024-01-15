var swapPairs = function (head) {
  let ret = new ListNode(0, head),
    temp = ret;
  while (temp.next && temp.next.next) {
    let first = temp.next,
      second = temp.next.next;
    temp.next = second;
    first.next = second.next;
    second.next = first;
    temp = first;
  }
  return ret;
};
