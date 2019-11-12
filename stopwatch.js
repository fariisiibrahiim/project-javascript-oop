// let now = new Date();

// class Stopwatch {
//     constructor(time)
//   start: now.getTime()
// };

// console.log(now);

// console.log(Stopwatch.start);

// const dateNow = new Date();
class Timer {
  constructor() {
    this.startTime = new Date();
    this.stopTime = new Date();
    this.dateNow = new Date();
    this.duration = this.stopTime - this.startTime;
  }

  start() {
    console.log(
      `this stopwatch start at ${this.dateNow.toLocaleTimeString()} `
    );
    this.startTime = this.startTime.getTime();
  }

  getStartTime() {
    console.log(`${this.startTime}`);
  }

  stop() {
    console.log(`this stopwatch stop at ${this.dateNow.toLocaleTimeString()} `);
    this.stopTime = this.stopTime.getTime();
  }
}

const stopwatch = new Timer();

stopwatch.start();

setTimeout(() => {
  stopwatch.stop();
}, 5000);

setTimeout(() => console.log(stopwatch.duration), 4000);
