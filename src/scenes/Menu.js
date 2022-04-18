class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/assets_explosion38.wav');
        this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
        this.load.audio('sfx_music', './assets/background_music.wav');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '28px',
            backgroundColor: '#ffffff',
            color: '#000000',
            align: 'center',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 500
        }

        //show menu text
        this.add.text(game.config.width/2, game.config.height/2 - (2 * (borderUISize +
        borderPadding)), 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#BBBBBB';
        this.add.text(game.config.width/2, game.config.height/2
        , 'Use arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + (3 *(borderUISize +
        borderPadding)),'P1: F/G to move, A to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + (4 *(borderUISize +
          borderPadding)),'P2: LEFT/RIGHT to move, L to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#f7ee37';
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize -
        borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + (2 *(borderUISize +
          borderPadding)), 'or DOWN arrow for 2 Player', menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 2,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
          // two player
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playTwoScene');    
        }
      }
}