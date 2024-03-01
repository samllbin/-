let format = (nums) => {
  let number = nums.toString();
  let temp = "";

  if (number.indexOf(".")) {
    temp = number.split(".")[1];
    number = number.split(".")[0];
  }
  let flag = number.length % 3;
  if (flag === 0) {
    return number.match(/\d{3}/g).join(",") + "." + temp;
  }
};

console.log(format(15649516156.5149415));
