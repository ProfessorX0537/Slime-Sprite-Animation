class animator{
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {       //sX, sY, sW, sH, dX, dY, dW, dH
        //track how long since last called
        this.elapsedTime += tick;
        //based on time calculate which frame to draw
        if(this.elapsedTime > this.totalTime) {this.elapsedTime -= this.totalTime};
        const frame = this.currentFrame();


        ctx.drawImage(this.spritesheet, 
            this.xStart + this.width * frame, this.yStart, 
            this.width, this.height, 
            x, y, 
            this.width * 8, this.height * 8);
    };

    currentFrame() {
        return Math.floor(this.elapsedTime /this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
}