////////////// Question 5 - Flatten an array ///////////////
const arr = [
  1,
  2,
  [3, 4, [5, 6]],
  9,
  10,
  [2, 3],
  [12, 13],
  [
    [[1, 2], 3],
    [20, 40],
  ],
]
const flatten = flattenedArray(arr, 2)
console.log(flatten)


function flattenedArray(arr, depth) {
  let resultArray = []
  arr.forEach((ele) => {
    if (Array.isArray(ele) && depth) {
      resultArray.push(...flattenedArray(ele, depth-1))
    }
    else {
      resultArray.push(ele)
    }
  })
  return resultArray
}