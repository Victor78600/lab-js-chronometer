class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (typeof printTimeCallback === "function") {
        printTimeCallback(this.currentTime);
      }
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    //let minutes = 0;
    //if (this.currentTime === 0) {
    //  return 0;
    //} else if ((this.currentTime = 1000 * 60)) {
    //  minutes += 1;
    return minutes;
    //}
  }

  getSeconds() {
    let numberOfSecond = this.currentTime % 60;
    return numberOfSecond;
  }

  computeTwoDigitNumber(value) {
    const stringValue = value.toString();
    if (stringValue.length < 2) {
      return "0" + stringValue;
    } else {
      return stringValue;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    computeTwoDigitNumber(minutes, numberOfSecond);
    let timer = minutes + ":" + numberOfSecond;
    return timer;
  }
}
