// Binary search

function main() {
  let array = [1,2,3,4,5,6,7,8,9,10,11]
  let ele = 5
  const recur = recursive(array, ele)
  const iter = iterative(array, ele)
  console.log(`Recur: ${recur} ---- Iterative: ${iter}`)
}
main()

function recursive(arr, ele) {
  return helper(arr, ele,0, arr.length-1)
}

function helper(arr, ele, l, h) {
  if (l>h) return
  let m = Math.floor((h+l)/2)
  if (arr[m] === ele) return m
  if (arr[m] > ele) return helper(arr, ele, l, m-1)
  if (arr[m] < ele)return helper(arr, ele, m+1, h)
}

function iterative(array, ele) {
  let l = 0
  let h = array.length - 1
  while (l<=h) {
    let m = Math.floor((h+l)/2)
    if (array[m] === ele) return m
    if (array[m] > ele) h = m-1
    if (array[m] < ele) l = m+1
  }
}