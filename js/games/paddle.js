class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 120;
        this.height = 100;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight
        }
    }
    
    draw(ctx) {
        ctx.fillRect(this.width, this.height, this.position.x, this.position.y);
    }
}

export default Paddle;