let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

Array.prototype.myMap = function (callback) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    let ele = callback(this[index], index, this);
    res.push(ele);
  }
  return res;
};

Array.prototype.myReduce = function (callback, initial) {
  let acc = initial;
  for (let index = 0; index < this.length; index++) {
    acc = callback(acc, this[index], index, this);
  }
  return acc;
};