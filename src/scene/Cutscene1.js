class Cutscene1 extends Phaser.Scene {
    constructor() {
        super('cs1Scene');
    }
    preload() {
        this.load.image('goodJob', './assets/Good-Job.png');
    }

    create() {
        this.BG = this.add.tileSprite(0, 0, 640, 480, 'goodJob').setOrigin(0, 0);

        this.input.on("pointerdown", () => this.scene.start("play2Scene"));
    }
}