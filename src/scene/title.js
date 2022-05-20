class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {
        this.load.image('titleBG', './assets/titlescreen.png')

        //this.add.text(game.config.width / 2, game.config.height / 2, "Roly Poly: To the End");
    }

    create() {
        console.log(game.config.width)
        console.log(game.config.height)
        this.title = this.add.sprite(game.config.width/2, game.config.height/2, 'titleBG')
        
        //const button = new Button(80, 30, 'Start Game', config, this, () => this.scene.start("play1Scene"));

        // Go back to Play1 screen on click.
        this.input.on("pointerdown", () => this.scene.start("play1Scene"));
    }
    
}