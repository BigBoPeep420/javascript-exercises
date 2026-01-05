const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(nums) {
	fn = 0;
  for (const num of nums) {
    fn += num;
  }
  return fn;
};

const multiply = function(nums) {
  fn = 1;
  for (const num of nums) {
    fn *= num;
  }
  return fn;
};

const power = function(b, e) {
	return Math.pow(b, e);
};

const factorial = function(num) {
  fn = 1;
	for(let i = 1; i <= num; i++){
    fn *= i;
  }
  return fn;
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
