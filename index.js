import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

const ball = new Ball(document.getElementById("ball"));

const userPad = new Paddle(document.getElementById("userPaddle"));
const  compPad = new Paddle(document.getElementById("compPaddle"));

const playerScoreElm = document.getElementById("playerScore")
const computerScoreElm = document.getElementById("computerScore")
let lastTime;

function update(time) {
if (lastTime != null) {
    const delta = time - lastTime;
    ball.update(delta, [userPad.rect(), compPad.rect()]);

    if (isLose()) handleLose() 

    
}

    lastTime = time;
    window.requestAnimationFrame(update);
}

function isLose() {
    const rect = ball.rect();
    return (rect.right >= window.innerWidth || rect.left <= 0) 
}
function handleLose () {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth) {
        playerScoreElm.textContent = parseInt(playerScoreElm.textContent) + 1
    }
    else {
        computerScoreElm.textContent = parseInt(computerScoreElm.textContent) + 1
    }
    
    ball.reset()
    compPad.reset()
}

document.addEventListener("KeyW", e => userPad.position += 1);
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
            compPad.position -= 5
            break;
        case 40:
            compPad.position += 5
            break;
            case 87:
            userPad.position -= 5
            break;
        case 83:
            userPad.position += 5
            break;
    }
};

window.requestAnimationFrame(update);