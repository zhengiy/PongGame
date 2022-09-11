const SPEED = 5
export default class Paddle {
    constructor(paddleElm) {
        this.paddleElm = paddleElm;
        this.reset;
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElm).getPropertyValue("--position"));
    }
    set position(value) {
        this.paddleElm.style.setProperty("--position", value);
    }

    update(delta, ballHeight) {
        this.position = ballHeight;
    }

    reset() {
        this.position = 50;
    }
    rect() {
        return this.paddleElm.getBoundingClientRect()
    }


}