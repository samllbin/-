var generateMatrix = function (n) {
  let loop = Math.floor(n / 2);
  let startX = 0;
  let startY = 0;

  let count = 1;
  let number = 1;
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let row = startX;
    let col = startY;
    for (; col < n - number; col++) {
      result[row][col] = count++;
    }
  }
};
