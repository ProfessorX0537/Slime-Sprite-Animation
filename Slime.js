class Slime{
    constructor(game) {
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./Slime-sheet4.png"), 0, 0, 24, 16, 6, .3);
        
        this.x = 0;
        this.y = 0;
        this.speed = 70;
    };

    update() {
        //should move character to this right
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}