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
