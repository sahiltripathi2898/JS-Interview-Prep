function first() {
  return new Promise(resolve => {
    console.log(2);
    resolve(3);
    console.log(4);
  });
}

async function f() {
  console.log(1);
  let r = await first();
	console.log('Hi')
  console.log(r);
}

console.log("a");
f();
console.log("b");

console.log('----------------')

const getValueA = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('A')
		}, 300);
	})
}
const getValueB = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('B')
		}, 300);
	})
}
const getValueC = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('C')
		}, 300);
	})
}

async function getABC() {
	// const a = await getValueA()
	// const b = await getValueB()
	// const c = await getValueC()
	// console.log(a+b+c)
	const obj = await Promise.all([getValueA(), getValueB(), getValueC()])
	console.log(obj)
}

getABC()