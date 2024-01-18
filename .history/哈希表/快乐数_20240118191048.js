var isHappy = function (n) {
  let map = new Map();
  while (true) {}
};

function getNext(n) {
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = parseInt(n / 10);
  }
  return sum;
}
