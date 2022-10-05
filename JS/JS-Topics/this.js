// This Keyword
// For a normal function this keyword would point to the object that function is called upon

function foo() {
  console.log("Simple function call")
  console.log(this === global)
}

let user = {
  count: 10,
  foo: foo,
  foo1: function() {
    console.log(this === global)
  },
}

user.foo() // Prints false because now “this” refers to user object instead of global object.
let fun1 = user.foo1
fun1() // Prints true as this method is invoked as a simple function.
user.foo1() // Prints false on console as foo1 is invoked as a object’s method, and the 'this' refers to the containing object NOT 'window' or 'global'

// default this in strict mode is 'undefined'

function userCreator (name, score) {
  const newUser = Object.create(userFunctionStore)
  newUser.name = name
  newUser.score = score
  return newUser
}

// Method 1 -- this = user1
// const userFunctionStore = {
//   increment: function () {
//     const add = () => {
//       this.score++
//       console.log(this) // will point to this in increment function which is user1
//     }
//     add() // Nothing behind add() so arrow function will corrospond to the lexcial scope of add(), in which add was called
//   },
//   login: function () {
//     console.log('Logged In !')
//   }
// }

// Method 1 -- this = user1
const userFunctionStore = {
  number: 2,
  increment: function () {
    function add () {
      this.number++
      console.log(this)
    }
    add()
    console.log(this)
  },
  login: function () {
    console.log('Logged In !')
  }
}

// Method 2 -- this = window
// const userFunctionStore = {
//   increment: function () {
//     console.log(this) // This will = user1, since user1.increment() was called
//     function add () {
//       this.score++
//       console.log(this) // this = window
//     }
//     add() // this points to default global object as for normal function there is nothing behind add()
//   },
//   login: function () {
//     console.log('Logged In !')
//   }
// }

const user1 = userCreator('Sahil', 11)
const user2 = userCreator('Ankur', 32)

// user1.increment()

userFunctionStore.increment()



////////////////// --- Tony undefined
function getName1(){
	console.log(this.name);
}

Object.prototype.getName2 = () =>{
	console.log(this.name)
}

let personObj = {
	name:"Tony",
	print:getName1
}

personObj.print();
personObj.getName2();