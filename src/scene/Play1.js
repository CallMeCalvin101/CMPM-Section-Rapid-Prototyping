class Play1 extends Phaser.Scene {
    constructor() {
        super('play1Scene');
    }

    preload() {
        this.load.image('rolypoly', './assets/RollyPolly-BalledUp.png');
        this.load.image('snail', 'assets/Snail.png');
    }

    create() {
        // Temp BG
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0xf2f2f2).setOrigin(0);

        this.player = new Player(this, 320, 400, 'rolypoly');

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
    }
}