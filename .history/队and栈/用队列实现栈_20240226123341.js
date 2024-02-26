var Mystack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

Mystack.prototype.push = function (x) {
  this.queue1.push(x);
};

Mystack.prototype.pop = function () {
  if (!this.queue1.length) {
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
};
