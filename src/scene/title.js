class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {
        this.load.image('titleBG', './assets/titlescreen.png')

        //this.add.text(game.config.width / 2, game.config.height / 2, "Roly Poly: To the End");
    }

    create() {

        this.title = this.add.sprite(game.config.width/2, game.config.height/2, 'titleBG')
        this.add.text((game.config.width/2)-75, game.config.height/2 +50, "Tap to continue");

        // Go back to Play1 screen on click.
        this.input.on("pointerdown", () => this.scene.start("play1Scene"));
    }
    
}