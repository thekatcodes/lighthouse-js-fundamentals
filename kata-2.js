const conditionalSum = function (values, condition) {
  let sum = 0;

  switch (condition) {
    case "even":
      for (value of values) {
        if (value % 2 === 0) {
          sum += value;
        }
      }
      return sum;
      break;
    case "odd":
      for (value of values) {
        if (value % 2 !== 0) {
          sum += value;
        }
      }
      return sum;
      break;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
