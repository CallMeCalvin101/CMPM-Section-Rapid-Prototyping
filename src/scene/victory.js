class Victory extends Phaser.Scene {
    constructor() {
        super('victoryScene');
    }
    preload() {
        this.load.image('victoryBG', './assets/victoryscreen.png');
        this.load.image('rolypoly-normal', './assets/RollyPolly-LayedOut.png');
    }

    create() {

        this.victory = this.add.image(game.config.width/2, game.config.height/2, 'victoryBG');
        this.add.text((game.config.width / 2)-25, game.config.height / 2, "VICTORY!");

        this.roly = this.add.image(game.config.width/2, (game.config.height/2)+100, 'rolypoly-normal');




        // Go back to title screen on click.
        this.input.on("pointerdown", () => this.scene.start("titleScene"));
    }
    
}