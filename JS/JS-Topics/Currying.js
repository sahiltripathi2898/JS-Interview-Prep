////// Function currying is basically using or extending that function for other purposes also

// Ex 1 using Bind

let multiply = function (x, y) {
	console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2); // x=2
multiplyByTwo(3); //y=3 , will output 6

let multiplyByThree = multiply.bind(this, 3); // x=3
multiplyByThree(4); //y=4 , will output 12

// Ex 2 using Closure

let addition = function (x) {
	return function (y) {
		console.log(x + y);
	};
};

let additionByTwo = addition(2); // x=2
additionByTwo(3); //y=3 , output is 5

let additionByThree = addition(3); // x=3
additionByThree(4); //y=4 , output is 7



function my(x) {
	return function (y) {
		return console.log(x+y)
	}
}

let yo = my(3)
yo(10)