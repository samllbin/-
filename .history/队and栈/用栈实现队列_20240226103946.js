// 使用两个数组的栈方法（push, pop） 实现队列
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

MyQueue.prototype.push = function (x) {
  this.stackIn.push(x);
};
MyQueue.prototype.pop = function () {
  let size = this.stackOut.length;
  if (size) {
    return this.stackOut.pop();
  } else {
    while (this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop());
    }
  }
  return this.stackOut.pop();
};
MyQueue.prototype.peek = function () {
  const x = this.pop();
  this.stackOut.push(x);
  return x;
};
