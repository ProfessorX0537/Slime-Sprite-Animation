class Slime{
    constructor(game) {
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./Slime-sheet4.png"), 0, 0, 24, 16, 6, .3);
        
        this.x = 448;
        this.y = 320;
        this.speed = 150;
    };

    update() {
        
        if(this.x > 1024 || this.x < 0) this.x = 0;
        if(this.y > 768 || this.y < 0) this.y = 0;

        if(this.game.keys["w"]) {
            this.y -= this.speed * this.game.clockTick;
        }
        if(this.game.keys["a"]) {
            this.x -= this.speed * this.game.clockTick;
        }
        if(this.game.keys["s"]) {
            this.y += this.speed * this.game.clockTick;
        }
        if(this.game.keys["d"]) {
            this.x += this.speed * this.game.clockTick;
        }


    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}