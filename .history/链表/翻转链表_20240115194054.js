var reverseList = function (head) {
  if (!head || !head.next) return head;
  var prev = null,
    curr = head;
  while (curr) {
    var next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
};
