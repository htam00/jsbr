// Draw Paddle Screen
class Paddle {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.width = 100;
        this.height = 10;

        this.maxSpeed = 3;
        this.speed = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }
    
    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight() {
        this.speed = this.maxSpeed
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(dtTime) {
        if(!dtTime) return;

        this.position.x += this.speed;

        if(this.position.x < 0) this.position.x = 0
        if(this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width
        }
    }
}

// Handle Keyboard input
class InputHandle {
    constructor(paddle) {
        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 37:
                    paddle.moveLeft()
                    break;
                case 39:
                    paddle.moveRight()
                    break;
                default:
                    break;
            }
        })
    }
} 

let canvas = document.getElementById("cnv")
let ctx = canvas.getContext("2d")

const GAME_WIDTH = 300;
const GAME_HEIGHT = 150;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
new InputHandle(paddle)

paddle.draw(ctx)

let lastTime = 0;

function gameLoop(timestamp) {
    let dtTime = timestamp - lastTime;
    lastTime = timestamp;

    // clear screen
    ctx.clearRect(0, 0, 400, 400);
    paddle.update(dtTime)
    paddle.draw(ctx)

    requestAnimationFrame(gameLoop)
}

gameLoop()