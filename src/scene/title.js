class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    preload() {

    }

    create() {
        this.scene.start('play1Scene');
    }
    
}