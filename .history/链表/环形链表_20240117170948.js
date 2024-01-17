/**
 * 检测链表中是否存在环
 *
 * @param head 链表头节点
 * @returns 如果存在环，则返回环的起始节点；否则返回 null
 */
//x = (n - 1) (y + z) + z
//x为头节点到入口的长度，y为入口到两指针相遇点的距离，z为相遇点到入口的距离
function detectCycle(head) {
  if (!head || !head.next) return null;
  let slow = head.next,
    fast = head.next.next;
  while (fast && fast.next && slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (!fast || !fast.next) return null;
  while (head !== fast) {
    head = head.next;
    fast = fast.next;
  }
  return head;
}
