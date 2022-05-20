class Play1 extends Phaser.Scene {
    constructor() {
        super('play1Scene');
    }

    preload() {
        this.load.image('rolypoly-normal', './assets/RollyPolly-LayedOut.png');
        this.load.image('rolypoly-rolled', './assets/RollyPolly-BalledUp.png');
        this.load.image('snail', 'assets/Snail.png');
    }

    create() {
        // Temp BG
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0xf2f2f2).setOrigin(0);

        this.player = new Player(this, 320, game.config.height - 50, 'rolypoly-normal', 'rolypoly-rolled');
        this.player.flipX = true;

        this.enemy1 = new Enemy(this, game.config.width, game.config.height - 50, 'snail');
        this.enemy2 = new Enemy(this, game.config.width + 300, game.config.height - 50, 'snail');

        this.pointer = this.input.activePointer;

        this.input.on('pointerdown', () => {
            this.player.jump();
        });
    }
    
    update() {
        this.player.update()
        this.enemy1.update();
        this.enemy2.update();

        if (this.enemy1.checkCollision(this.player)) {
            this.enemy1.setSpeed(0);
            //this.endGame();
        }

        if (this.enemy2.checkCollision(this.player)) {
            this.enemy2.setSpeed(0);
            //this.endGame();
        }
    }

    endGame() {
        console.log("end");
        this.time.delayedCall(2000, () => {
            this.scene.start("titleScene");
        });
    }
}