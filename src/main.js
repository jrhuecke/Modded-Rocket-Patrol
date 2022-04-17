let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    highscore: 0,
}
let game = new Phaser.Game(config);

//reserve keyboard vars
let keyF, keyM, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//start highscore at 0
game.config.highscore = 0;