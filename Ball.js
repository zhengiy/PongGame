export default class Ball {
    constructor(ballElm) {
        this.ballElm = ballElm
    }

get x() {
  return getComputedStyle(this.ballElm).getPropertyValue("--x");
}

set x(value) {
    this.ballElm.style.setProperty("--x", value);
}

    update(delta) {
        this.x = 5;
    }
}