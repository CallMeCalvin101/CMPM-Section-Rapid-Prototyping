class Play1 extends Phaser.Scene {
    constructor() {
        super('play1Scene');
    }

    preload() {
        this.load.image('rolypoly', './assets/RollyPolly-BalledUp.png');
    }

    create() {
        // Temp BG
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0xf2f2f2).setOrigin(0);

        this.player = new Player(this, 320, 400, 'rolypoly');

        this.pointer = this.input.activePointer;

        this.input.on('pointerdown', () => {
            this.player.jump();
        });
    }
    
    update() {
        this.player.update()
    }
}