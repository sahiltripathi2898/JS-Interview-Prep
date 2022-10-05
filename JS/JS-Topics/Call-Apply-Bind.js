let name = {
	a: 'sahil',
};

let name2 = {
	a: 'ankur',
};

let fullName = function (city, college) {
	console.log(this.a + ' ' + college + ' ' + city);
};

// call
fullName.call(name, 'Jaipur', 'NIT')

//apply
fullName.apply(name, ['Jaipur', 'NIT']);

//bind

let fullNameValue = fullName.bind(name, 'Jaipur', 'NIT')
// fullNameValue = fullNameValue.bind(name2, 'Ranchi', 'BIT'); We cannot bind a function multiple times
// fullNameValue.call(name2, 'Ranchi', 'BIT') // Once binded with one object it will be forever
fullNameValue();
