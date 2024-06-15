const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((accumlulator, current) => accumlulator + current, 
  0);
};

const multiply = function([...arr]) {
  return arr.reduce((accum, current) => accum * current, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	let factProduct = 1;
  if (a > 0) {
    for (let i=1; i<=a; i++) {
      factProduct = factProduct*i;
    }
  }
  return factProduct;
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
