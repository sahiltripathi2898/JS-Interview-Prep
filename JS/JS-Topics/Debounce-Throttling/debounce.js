//Debounce in js
// API call  should be limited , it should only be done when there is a delay by user
// in typing the search box , not on every character an API call should be made
///<input type="text" onkeyup="betterFunction()">

function apiCall() {
	console.log('API calls');
}

const deBounce = (func, delay) => {
	let timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func();
		}, delay);
	};
};
// Api call is only made after 300ms
const betterApiCall = deBounce(apiCall, 300);

