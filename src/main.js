let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Title, Play1, Play2, Play3, Victory]
}

let game = new Phaser.Game(config);