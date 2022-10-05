// For each
let a = [1, 2, 3, 4, 5];
let sum = 0;
a.forEach((value, index) => {
	sum += value;
});
console.log(sum);

// Map
let b = [1, 2, 3, 4, 5];
let array = b.map((value) => {
	return value * 2;
});
console.log(array);

//Filter
let c = [1, 2, 3, 4, 5];
let filtered = c.filter((value) => {
	return value > 2;
});
console.log(filtered);

//Reduce
let d = [1, 2, 3, 4, 5];
let total = d.reduce((currentTotal, value) => {
	return value + currentTotal;
}, 0);
console.log(total);

console.log(isNaN(null));

var obj1 = {
	valueOfThis: function () {
		console.log(this);
	},
};
var obj2 = {
	valueOfThis: () => {
		console.log(this);
	},
};

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object
