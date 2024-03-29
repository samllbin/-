var generateMatrix = function (n) {
  let loop = Math.floor(n / 2);
  let startX = 0;
  let startY = 0;

  let mid = Math.floor(n / 2);
  let count = 1;
  let number = 1;
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let row = startX;
    let col = startY;
    for (; col < n - number; col++) {
      result[row][col] = count++;
    }
    for (; row < n - number; row++) {
      result[row][col] = count++;
    }
    for (; col > startY; col--) {
      result[row][col] = count++;
    }
    for (; row > startX; row--) {
      result[row][col] = count++;
    }

    startX++;
    startY++;
    number++;
  }
  if (n % 2 === 1) {
    result[mid][mid] = count;
  }
  return result;
};

console.log(generateMatrix(6));

function generateMatrix1(n) {
  let loop = Math.floor(n / 2);
}
