let format = (nums) => {
  let str = nums.toString();
  let temp = "";
  if (str.indexOf(".")) {
    temp = "." + str.split(".")[1];
    str = str.split(".")[0];
  }
};

console.log(format(15649516156.5149415));
