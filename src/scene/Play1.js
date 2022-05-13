class Play1 extends Phaser.Scene {
    constructor() {
        super('play1Scene');
    }

    preload() {

    }

    create() {
        // Temp BG
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0xf2f2f2).setOrigin(0);
        
        // Go back to title screen on click.
        this.input.on("pointerdown", () => this.scene.start("titleScene"));
    }
    
}