class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture, 0);
        scene.add.existing(this);
        
        this.floor = y
        this.jumpHeight = 240
        this.jumpSpeed = 10;
        this.isJump = false;
        this.MAX_JUMP_HEIGHT = this.floor - this.jumpHeight;
    }

    jump() {
        this.isJump = true;
    }

    update() {
        if (this.isJump == true) {
            this.y -= this.jumpSpeed;
            if (this.y <= this.MAX_JUMP_HEIGHT) {
                this.isJump = false;
            }
        }

        if (this.isJump == false && this.y < this.floor) {
            this.y += this.jumpSpeed;
        }
    }
}