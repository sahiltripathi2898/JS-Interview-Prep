let obj1 = {
	name: 'Sahil',
	lastname: 'Tripathi',
};

let obj2 = {
	name: 'Ankur',
	lastname: 'Tiwari',
};

// Prevent adding
Object.preventExtensions(obj2);
obj2['class'] = 'A';
console.log(obj2);

//Get keys and values
Object.keys(obj1);
Object.values(obj1);

//destructuring
let { name, lastname } = obj2;
console.log(name, lastname);

//prototype
Object.prototype.getFullName = function () {
	console.log(this.name + this.lastname);
};

obj1.getFullName();
obj2.getFullName();

function Car(name, company) {
	(this.name = name), (this.company = company);
}

let objCar = new Car('Mustang', 'Ford');
console.log(objCar);

// Setting prototype
let animal = {
	type: 'bird',
};

let animal1 = Object.create(animal);
console.log(animal1.type);

console.log('-------------')
let a = {
	age: 45,
	name: 'sahil',
	ctc: 12
}

let b = {
	age:34,
	name: 'ankur'
}

b = Object.create(a)
// b.__proto__ = a
console.log(b.ctc)