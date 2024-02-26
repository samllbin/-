var Mystack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

Mystack.prototype.push = function (x) {
  this.queue1.push(x);
};
