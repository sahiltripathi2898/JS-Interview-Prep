// window.addEventListener('resize', expensive);
// To make API calls after a fixed specific time
// Debounce makes api calls after a delay in action , eg keyup

const apiCall = () => {
	console.log('Expensive resize can be improved by throttle');
};

const throttle = function (func, delay) {
	let flag = true;
	return function () {
		if (flag) {
			func();
			flag = false;
			setTimeout(() => {
				flag = true;
			}, delay);
		}
	};
};

const betterApiCall = throttle(apiCall, 300);
