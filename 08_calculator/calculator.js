const add = function(num1 = 0, num2 = 0) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function(num1 = 0, num2 = 0) {
	let diff = num1 - num2;
  return diff;
};

const sum = function(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++){
    let num = +arr[i];
    sum = sum + num;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (i = 0; i < arr.length; i++){
    let num = +arr[i];
    product = product * num;
  }
  return product;
};

const power = function(base = 0, power = 0) {
  let product = 1;
	while(power > 0){
    product = product * +base;
    power--;
  }
  return product;
};

const factorial = function(num = 0) {
	let factorial = 1;
  while (num > 0){
    factorial = factorial * num;
    num--;
  }
  return factorial;
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
