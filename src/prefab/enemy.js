// Enemy prefab
class Enemy extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture, destroyCounter) {
        super(scene, x, y, texture);

        this.setScale(0.1, 0.1);
        this.destroyCounter = destroyCounter;
        //this.x = game.config.width;
        this.isDestroyed = false;
        this.setSpeed(1.5);

        // add object to existing scene
        scene.add.existing(this);
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    update() {

        this.x -= this.speed;

        if (this.offScreen() && !this.isDestroyed) {
            this.destroyCounter.destroyedCount += 1;
            console.log(this.destroyCounter);
            this.destroy();
            this.isDestroyed = true;
        }
    }

    checkCollision(other) {
        let bounds1 = this.getBounds();
        let bounds2 = other.getBounds();
        return Phaser.Geom.Intersects.RectangleToRectangle(bounds1, bounds2);
    }

    offScreen() {
        return (this.x + this.width) < 0;
    }
}