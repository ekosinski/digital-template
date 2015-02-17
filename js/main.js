window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        //game.load.image( 'b', 'assets/phaser.png' );
        game.load.image( 'background', 'assets/starry.png' );
        game.load.image( 'spaceship', 'assets/spaceship2.png' );
        //game.load.audio( 'bodyDry', 'assets/01 -Before my body is dry.mp3');
        game.load.image( 'platforms', 'assets/platform.png');
        game.load.image( 'matter', 'assets/darkness.png');
    }
    
    var bouncy;
    var background;
    var spaceship;
    var platforms;
    var cursors
    var matter;
    var matterClone;
    var matterClone2;
    var matterClone3;
    var matterClone4;

    var bodyDry;
    
    function create() {

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        background = game.add.tileSprite(0,0,800,600,'background');
        //  A simple background for our game
        spaceship = game.add.sprite(game.world.centerX,game.world.centerY, 'spaceship');
        spaceship.anchor.setTo(0.5,0.5);
        spaceship.scale.x = .15;
        spaceship.scale.y = .15;

        //bodyDry = game.add.audio('bodyDry');
        //bodyDry.loop = true;
        //bodyDry.play();
        //spaceship = game.add.sprite( game.world.centerX, game.world.centerY, 'spaceship');
        game.physics.enable(spaceship, Phaser.Physics.ARCADE);
        spaceship.body.velocity.x = 0;
        spaceship.body.velocity.y = 0;

        matter = game.add.group();
        matter.enabledBody = true;
       // game.physics.enable(matterClone, Phaser.Physics.ARCADE);
        matterClone = game.add.sprite(100, 100,'matter');
        matterClone.scale.setTo(.15,.15);
        matterClone.enabledBody = true;
        //game.physics.enable(matterClone2, Phaser.Physics.ARCADE);
        matterClone2 = game.add.sprite(250,250,'matter');
        matterClone2.scale.setTo(.15,.15);
        matterClone2.enabledBody = true;
       // game.physics.enable(matterClone3, Phaser.Physics.ARCADE);
        matterClone3 = game.add.sprite(690,320,'matter' );
        matterClone3.scale.setTo(.15,.15);
        matterClone3.enabledBody = true;
        //game.physics.enable(matterClone4, Phaser.Physics.ARCADE);
        matterClone4 = game.add.sprite(540,150,'matter');
        matterClone4.scale.setTo(.15,.15);
        matterClone4.enabledBody = true;
    }
    
    function crash1(spaceship, matterClone){
        spaceship.kill();
    }
    function crash2(spaceship, matterClone2){
        spaceship.kill();
    }
    function crash3(spaceship, matterClone3){
        spaceship.kill();
    }
    function crash4(spaceship, matterClone4){
        spaceship.kill();
    }

    function update() {
		game.physics.arcade.collide(spaceship,matter);
		
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        //bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
        cursors = game.input.keyboard.createCursorKeys();

        if(cursors.left.isDown){
            spaceship.body.velocity.x = -150;
        }
        else if (cursors.right.isDown){
            spaceship.body.velocity.x = 150;
        }
        else if (cursors.up.isDown){
            spaceship.body.velocity.y = -150;
        }
        else if (cursors.down.isDown){
            spaceship.body.velocity.y = 150;
        }  

        game.physics.arcade.overlap(spaceship,matterClone,crash1,null,this);
        game.physics.arcade.overlap(spaceship,matterClone2,crash2,null,this);
        game.physics.arcade.overlap(spaceship,matterClone3,crash3,null,this);
        game.physics.arcade.overlap(spaceship,matterClone4,crash4,null,this);
    }
};
