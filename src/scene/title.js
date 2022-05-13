class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {

    }

    create() {
        
        const button = new Button(80, 30, 'Start Game', config, this, () => this.scene.start("play1Scene"));
    }
    
}