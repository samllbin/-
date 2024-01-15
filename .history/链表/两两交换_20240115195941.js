var swapPairs = function (head) {
  let ret = new ListNode(0, head);
  let temp = ret;
  while (temp.next && temp.next.next) {
    let first = temp.next,
      second = temp.next.next;
    temp.next = second;
    first.next = second.next;
    second.next = first;
    temp = first;
  }
  return ret.next;
};

console.log(swapPairs([1, 2, 3, 4]));
