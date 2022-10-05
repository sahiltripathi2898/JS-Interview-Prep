// IIFE or self invoking function expression

/////// Advantages
// Use the IIFE for isolating parts of the code to hide details of implementation.
// IIFE is the basis of in the module pattern in ES5 code, it helps to prevent polluting the global scope and provide the module interface to the outside.
// Use it in closures, when you use closures in loops.
// Garbage collected instantly
// NOT SURE ABOUT THIS ---- Specify the input interface of your code by passing commonly used global objects (window, document, jQuery, etc.) IIFE’s parameters, and then reference these global objects within the IIFE via a local scope.
// Basically pass these pre defined global objects as different values inside IIFE

(function abc() {
  console.log('abc')
})()
// If IIFE has name then it is easier to debug in stack tracing