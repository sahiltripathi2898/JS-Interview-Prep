//setTimeout

function call(first, second) {
	console.log(first, second);
}
//Function name , time , parameters
setTimeout(call, 1000, 'Sahil', 'Tripathi');

//setTimeout(call()) --- Wrong don't call the function just pass the function

//With arrow function we cannot pass arguements
setTimeout(() => {
	console.log('Arrow Function');
}, 1000);

let timeOut = setTimeout(() => {
	console.log('Arrow Function');
}, 1000);
clearTimeout(timeOut);
console.log(timeOut);

//SetInterval
let intervalOut = setInterval(() => {
	console.log('interval');
}, 1000);

setTimeout(() => {
	clearInterval(intervalOut);
}, 3000);

//SetTimeout used as setInterval but with varying time
let delay = 1000;

let timer = setTimeout(function request() {
	//do something

	if (error) {
		delay *= 2;
	}
	timer = setTimeout(request, delay);
}, delay);
