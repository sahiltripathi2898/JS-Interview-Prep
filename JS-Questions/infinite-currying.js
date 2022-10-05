const result = add(2)(3)(4)(5)()
console.log(result)

function add(a) {
  return function (b) {
    if (!b) {
      return a
    } else {
      return add(a + b)
    }
  }
}

