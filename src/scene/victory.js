class Victory extends Phaser.Scene {
    constructor() {
        super('victoryScene');
    }

    create() {
        
        this.add.text(game.config.width / 2, game.config.height / 2, "VICTORY");

        // Go back to title screen on click.
        this.input.on("pointerdown", () => this.scene.start("titleScene"));
    }
    
}