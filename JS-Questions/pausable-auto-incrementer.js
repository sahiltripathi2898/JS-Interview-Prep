// https://learnersbucket.com/examples/interview/create-pausable-auto-incrementer/

/*
Create a start/stop auto incrementer in JavaScript, 
which takes an initial value and steps as input 
and increments the initial value with given steps every second.

const timerObj = timer(10, 10);
//start
timerObj.startTimer();

//stop
setTimeout(() => {
    timerObj.stopTimer();
}, 6000);

Output:
10
20
30
40
50
*/

// Answer Using Functions
const timer = (init, increment) => {
  let initial = init;
  let timer;
  function startTimer() {
    timer = setInterval(() => {
      console.log(initial);
      initial = initial + increment;
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timer);
  }
  return {
    startTimer,
    stopTimer
  };
};

// Answer using classes
class Timer {
  constructor(init, steps) {
    this.initial = init;
    this.increment = steps;
    this.timer = null;
  }
  startTimer() {
    this.timer = setInterval(() => {
      console.log(this.initial);
      this.initial = this.initial + this.increment;
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
}