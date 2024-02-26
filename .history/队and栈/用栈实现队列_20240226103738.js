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
MyQueue.prototype.pop = function () {};
