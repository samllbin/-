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

function generateMatrix1(n) {
  let loop = Math.floor(n / 2);
  let startX = 0,
    startY = 0;
  let number = 1;
  let count = 1;
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (loop--) {
    let row = startX;
    let clo = startY;
    for (; row > n - count; row++) {
      result[row][clo] = number++;
    }
    for (; clo > n - count; clo++) {
      result[row][clo] = number++;
    }
    for (; row > startX; row--) {
      result[row][clo] = number++;
    }
    for (; clo > startY; clo--) {
      result[row][clo] = number++;
    }
  }
  if (n % 2 === 0) {
    result[n / 2][n / 2] = number;
  }
  return result;
}

console.log(generateMatrix1(6));
