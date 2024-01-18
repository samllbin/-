// 快乐数
//对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
//然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
var isHappy = function (n) {
  let map = new Map();
  while (true) {
    n = getNext(n);
    if (n === 1) return true;
    if (map.has(n)) return false;
    map.set(n, 1);
  }
};

function getNext(n) {
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = parseInt(n / 10);
  }
  return sum;
}
