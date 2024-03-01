let format = (nums) => {
  let str = nums.toString();
  let temp = "";
  if (str.indexOf(".")) {
    temp = "." + str.split(".")[1];
    str = str.split(".")[0];
  }
  let flag = str.length % 3;

  if (flag === 0) {
    return str.match(/\d{3}/g).join(",") + temp;
  }
};

console.log(format(15649516156.5149415));
