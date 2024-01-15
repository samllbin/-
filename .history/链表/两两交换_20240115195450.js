class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
var swapPairs = function (head) {
  let preHead = new ListNode(0);
  let ret = head.map((item) => {
    preHead.next = new ListNode(item);
  });
  console.log(ret);
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
