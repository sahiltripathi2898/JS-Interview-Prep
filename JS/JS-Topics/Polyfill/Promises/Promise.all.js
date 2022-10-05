let prom1 = Promise.resolve('foo')
let prom2 = Promise.resolve('bar')
let prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done !')
  }, 300)
})
let prom4 = 70
let prom5 = Promise.reject('Rejected !')

// Using .then
// Promise.myAll = function (promises) {
//   return new Promise((resolve, reject) => {
//     let results = []
//     let counter = 0
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then((res) => {
//           counter++
//           results[index] = res
//           if (counter === promises.length) {
//             resolve(results)
//           }
//         })
//         .catch((err) => reject(err))
//     })
//   })
// }

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let resArray = [];
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          if (resArray.length === promises.length) {
            resolve(resArray);
          }
          resArray[index] = result
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// Using async await
Promise.myAll2 = function (promises) {
  let succResp = []
  let errorResp = []
  let counter = 0
  return new Promise((resolve, reject) => {
    promises.forEach(async (singlePromise, index) => {
      try {
        let promRes = await singlePromise
        succResp[index] = promRes
        counter++
        if (counter === promises.length) {
          resolve(succResp)
        }
      } catch (err) {
        errorResp.push(err)
        reject(errorResp)
      }
    })
  })
}

Promise.myAll4 = async function(promises){
  let result = [];
  for(let promise of promises){
      try{
        const data = await promise;
        result.push(data);
      }
      catch(e){
        throw new Error(e)
      }
  }
  return result;
}

Promise.all([prom1, prom2, prom3, prom4, prom5])
  .then((res) => console.log(res))
  .catch((value) => console.log(value))

Promise.myAll([prom1, prom2, prom3, prom4, prom5])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

Promise.myAll2([prom1, prom2, prom3, prom4])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
