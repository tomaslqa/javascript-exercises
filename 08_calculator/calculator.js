const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (num) {
  let sum = 0;
  num.map(number => {
    sum += number;
  })
  return sum;
};

const multiply = function (num) {
  let result = 1;
  num.map(number => {
    result *= number;
  })
  return result;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }
  let result = 1;
  for (i = num; i > 0; i--) {
    result *= i;
  } return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
