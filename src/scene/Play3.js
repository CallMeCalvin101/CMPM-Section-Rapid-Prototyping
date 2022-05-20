class Play3 extends Phaser.Scene {
    constructor() {
        super('play3Scene');
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

        this.destroyedCounter = {
            destroyedCount: 0
        }
        this.enemy1 = new Enemy(this, game.config.width, game.config.height - 50, 'snail', this.destroyedCounter);
        this.enemy2 = new Enemy(this, game.config.width + 300, game.config.height - 50, 'snail', this.destroyedCounter);
        this.enemy3 = new Enemy(this, game.config.width + 600, game.config.height - 50, 'snail', this.destroyedCounter);


        this.pointer = this.input.activePointer;

        this.input.on('pointerdown', () => {
            this.player.jump();
            this.playerTween.play();
        });

        //using tweens to add a spin animation to the rolled up sprite
        this.playerTween = this.tweens.add({
            targets: this.player,
            angle: {from: 0, to: 360},
            duration: 24
        })
    }
    
    update() {

        this.player.update()
        this.enemy1.update();
        this.enemy2.update();
        this.enemy3.update();

        if (this.destroyedCounter.destroyedCount == 3) {
            this.scene.start("victoryScene");
        }
        if (this.enemy1.checkCollision(this.player)) {
            this.enemy1.setSpeed(0);
            this.endGame();
        }

        if (this.enemy2.checkCollision(this.player)) {
            this.enemy2.setSpeed(0);
            this.endGame();
        }

        if (this.enemy3.checkCollision(this.player)) {
            this.enemy3.setSpeed(0);
            this.endGame();
        }
    }

    endGame() {
        console.log("end");
        this.time.delayedCall(1000, () => {
            this.scene.start("titleScene");
        });
    }
    
}