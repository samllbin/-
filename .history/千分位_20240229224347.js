let format = (nums) => {
  let number = nums.toString();
  let temp = "";

  if (number.indexOf(".")) {
    temp = number.split(".")[1];
    number = number.split(".")[0];
  }
};

console.log(format(15649516156.5149415));
