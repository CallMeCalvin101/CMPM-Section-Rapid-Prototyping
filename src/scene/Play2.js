class Play2 extends Phaser.Scene {
    constructor() {
        super('play2Scene');
    }

    preload() {

    }

    create() {
        // Temp BG
        this.add.rectangle(0, 0, game.config.width, game.config.height, 0xf2f2f2).setOrigin(0);
        
        this.add.text(game.config.width / 2, game.config.height / 2, "play2");

        // Go back to title screen on click.
        this.input.on("pointerdown", () => this.scene.start("play3Scene"));
    }
    
}