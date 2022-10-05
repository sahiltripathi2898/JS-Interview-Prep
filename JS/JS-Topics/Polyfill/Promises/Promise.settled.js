Promise.myAllSettled = function (promises) {
  let succResp = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach(async (singlePromise, index) => {
      try {
        let promRes = await singlePromise;
        succResp[index] = {
          status: 'fulfilled',
          value: promRes
        }
      } catch (err) {
        succResp[index] = {
          status: 'rejected',
          reason: err
        }
      } finally {
        counter++;
        if (counter === promises.length) {
          resolve(succResp);
        }
      }
    });
  });
};

Promise.allSettled([prom1, prom2, prom3, prom4, prom5])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.myAllSettled([prom1, prom2, prom3, prom4, prom5])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));