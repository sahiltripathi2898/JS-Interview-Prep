///// Polyfill for Bind function
// Making own bind function , because bind may not be available in some browsers

let name = {
	firstName: 'Sahil',
	lastName: 'Tripathi',
};

let printName = function (city, country) {
	console.log(
		this.firstName + ' ' + this.lastName + ' , ' + city + ' ' + country
	);
};

// Normal bind function
let normalBind = printName.bind(name, 'Jaipur', 'India');
normalBind();

// Self made bind function
// What we want -> let selfBind = printName.myBind(name);

// myBind should be available to all functions , so add it in functions prototypre
Function.prototype.myBind = function (...args) {
	// here 'this' will point to the printName method which is called upon
	let currMethod = this;

	// Here ...args has all the arguements , since args[0] will always be the object , we need to get the rest of the arguements
	let params = args.slice(1); // It's in form of array so we'll need .apply() instead of .call()
	// Will return a function , since bind functions return a function
	return function () {
		currMethod.apply(args[0], params);
	};
};

let selfBind = printName.myBind(name, 'Jaipur', 'India');
selfBind();
