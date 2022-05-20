class Victory extends Phaser.Scene {
    constructor() {
        super('victoryScene');
    }
    preload() {
        this.load.image('victoryBG', './assets/victoryscreen.png');
        this.load.spritesheet('fireworks','./assets/victoryscreen_fireworks.png')
    }

    create() {
        
        this.victory = this.add.sprite(game.config.width/2, game.config.height/2, 'victoryBG')
        this.add.text(game.config.width / 2, game.config.height / 2, "VICTORY");

        // Go back to title screen on click.
        this.input.on("pointerdown", () => this.scene.start("titleScene"));
    }
    
}