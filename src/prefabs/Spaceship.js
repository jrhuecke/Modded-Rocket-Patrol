class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.movingLeft = math.floor(math.random() * 2);
    }

    update() {
        //move spaceship left or right
        if (this.movingLeft) {
            this.x -= this.moveSpeed;
        } else {
            this.x += this.moveSpeed;
        }   
        //wrap around from left to right or vice versa
        if (this.x <= 0 - this.width && this.movingLeft) {
            this.reset();
        }
        if (this.x >= this.width + game.config.width && !this.movingLeft) {
            this.reset();
        }
    }

    reset() {
        this.movingLeft = math.floor(math.random() * 2);
        if (this.movingLeft) {
            this.x = game.config.width;
        } else {
            this.x = 0
        }
    }
}
