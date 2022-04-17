class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, left, right, fire, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
        this.left = left;
        this.right = right;
        this.fire = fire;
    }

    update() {
        //left/right movement  
        if(this.left.isDown && this.x >= borderUISize + this.width) {
           this.x -= this.moveSpeed;
        } else if (this.right.isDown && this.x <= game.config.width - borderUISize - this.width) {
           this.x += this.moveSpeed;
        }
      
        //fire button
        if(Phaser.Input.Keyboard.JustDown(this.fire) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); // play sfx
        }

        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
           this.reset();
        }
    }

    //reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
