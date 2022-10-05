function multiply(a, b) {
  let i = 1000000000
  while (i-->0) {
    true
  }
  return a*b
}

function cachedMultiply(instructions) {
  let map = new Map()
  return function (...args) {
    console.log(args)
    const key = JSON.stringify(args)
    if (map.has(key)) {
      return map.get(key)
    } else {
      const res = instructions(...args)
      map.set(key, res)
      return res
    }
  }
}

const betterMultiply = cachedMultiply(multiply)

console.time()
console.log(betterMultiply(5,6))
console.timeEnd()

console.time()
console.log(betterMultiply(5,6))
console.timeEnd()