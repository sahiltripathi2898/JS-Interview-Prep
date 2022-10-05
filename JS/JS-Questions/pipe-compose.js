// Pipe 
const person = {
  name: 'HarryPotter'
}
const getName = (value) => value.name
const upperCase = (value) => value.toUpperCase()
const get5Characters = (value) => value.substring(0,5)
const reverse = (value) => value.split('').reverse().join('')

// We want to do this
const badWayResp = reverse(get5Characters(upperCase(getName(person))))
console.log(badWayResp)
// And so on for other fns, can get very nested, not good!


// Pipe is HOF and resolves from left to right
const pipe = (...functions) => {
  return function (actualValue) {
    // debugger
    return functions.reduce((currValue, currFunction) => {
      // debugger
      return currFunction(currValue)
    }, actualValue)
  }
}
const withPipeResp = pipe(getName, upperCase, get5Characters, reverse)(person)
console.log(withPipeResp)


// Compose is similar to pipe
// It resolves from right to left
// we will use reduceright in compose
// const compose = (...functions) => {
//   return function (actualValue) {
//     // debugger
//     return functions.reduceRight((currValue, currFunction) => {
//       // debugger
//       return currFunction(currValue)
//     }, actualValue)
//   }
// }
// const resComp = compose(reverse, get5Characters, upperCase, getName)(person)
// console.log(resComp)