class User {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		console.log(this.name);
	}
}

let user1 = new User('Sahil');
user1.sayHi();

//////////////////////

function Guest(name) {
	this.name = name;
}

Guest.prototype.sayHi = function () {
	console.log(this.name);
};

let Guest1 = new Guest('Ankur');
Guest1.sayHi();

////////////////////

class Car {
	constructor(brand) {
		this.brand = brand;
	}
}

class SuperCar extends Car {
	constructor(brand, name) {
		super(brand);
		this.name = name;
	}
	display() {
		console.log(this.name + ' ' + this.brand);
	}
}

let ferrari = new SuperCar('ferrari', 'c7');
ferrari.display();
