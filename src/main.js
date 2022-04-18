/* Ryan Hueckel
   Modded Rocket Patrol Project 4/17/2022

   Score Breakdown:
   5 - Track highscore
   5 - Add music
   5 - Random spaceship movement
   5 - Allow player to move rocket after fired
   5 - Fire text from original game
   5 - New background
   10 - Display time remaining
   10 - New title screen
   20 - Create new smaller/faster spaceship
   30 - Simultaneous two-player mode
   TOTAL: 100
*/


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, PlayTwo ],
    highscore: 0,
    twoplayer_highscore: 0
}
let game = new Phaser.Game(config);

//reserve keyboard vars
let keyF, keyM, keyR, keyA, keyG, keyL, keyLEFT, keyRIGHT, keyDOWN;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//start highscore at 0
game.config.highscore = 0;
game.config.twoplayer_highscore = 0;