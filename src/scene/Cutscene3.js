class CS3 extends Phaser.Scene {
    constructor() {
        super('cs3Scene');
    }
    preload() {
        this.image.load('goodJob', './assets/Good-Job.png');
    }

    create() {
        this.BG = this.tileSprite(0, 0, 640, 480, 'goodJob').setOrigin(0, 0);

        this.input.on("pointerdown", () => this.scene.start("victoryScene"));
    }
}