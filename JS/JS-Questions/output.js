(function () {
  var x, y;
  try {
    throw new Error(3);
  } catch (x) {
    x = 1;
    y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

/////////////////

for (var i = 0; i < 3; i++) {
  console.log('here', i)
  setTimeout(() => {
    console.log(i);
  }, 100);
}

///////////////////

const a = {
  x: 1,
  get: () => {
    console.log(this.x);
  },
};
a.get();

const c = {
  x: 2,
};
const d = {
  x: 3,
};
``
a.get.call(c);
const fn = a.get.bind(c).bind(d);
fn();
