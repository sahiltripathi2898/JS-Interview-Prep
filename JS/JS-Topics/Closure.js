// Example 1 of closures

function init() {
	var name = 'Mozilla'; // name is a local variable created by init
	function displayName() {
		// displayName() is the inner function, a closure
		console.log(name); // use variable declared in the parent function
	}
	displayName();
}
init();

// Example 2 closures

function addCount() {
	let count = 0;
	return function counter() {
		console.log(++count)
	}
}

const onClick = addCount()
for (let index = 0; index < 5; index++) {
	onClick()
}