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

        //Load the heart background
        game.load.image( 'background', 'assets/LoveBackground.ai' );
        //Load the girl on the side. The girl is not finished yet
        //game.load.image( 'girlneutral', 'assets/girlNeutral.ai');
        //game.load.image(' girlHappy1','assets/girlHappy1.ai');
        //game.load.image('girlHappy2', 'assets/girlHappy2.ai');
        //game.load.image('girlHappy3', 'assets/girlHappy3.ai');
        //game.load.image('girlSad1', 'assets/girlSad1.ai');
        //game.load.image('girlSad2', 'assets/girlSad2.ai');
        //game.load.image('girlSad3', 'assets/girlSad3.ai');

        //Load question prompts
        //game.load.image('Question1','assets/question1.ai');
        //game.load.image('Question11','assets/question1-1.ai');
        //game.load.image('Question12','assets/question1-2.ai');
        //game.load.image('Question13','assets/question1-3.ai');
        //game.load.image('Question2','assets/question2.ai');
        //game.load.image('Question21','assets/question2-1.ai');
        //game.load.image('Question22','assets/question2-2.ai');
        //game.load.image('Question23','assets/question2-3.ai');
        //game.load.image('Question3','assets/question3.ai');
        //game.load.image('Question31','assets/question3-1.ai');
        //game.load.image('Question32','assets/question3-2.ai');
        //game.load.image('Question33','assets/question3-3.ai');
        //game.load.image('Question4','assets/question4.ai');
        //game.load.image('Question41','assets/question4-1.ai');
        //game.load.image('Question42','assets/question4-2.ai');
        //game.load.image('Question43','assets/question4-3.ai');
        //game.load.image('Question5','assets/question5.ai');
        //game.load.image('Question51','assets/question5-1.ai');
        //game.load.image('Question52','assets/question5-2.ai');
        //game.load.image('Question53','assets/question5-3.ai');

        //game.load.image('AskNumber','assets/AskNumber.ai')
        
    }
    
    var background;
    var girlneutral;
    var girlHappy1;
    var girlHappy2;
    var girlHappy3;
    var girlSad1;
    var girlSad2
    var girlSad3
    var Question1;
    var Question11;
    var Question12;
    var Question13;
    var Question2;
    var Question21;
    var Question22;
    var Question23;
    var Question3;
    var Question31;
    var Question32;
    var Question33;
    var Question4;
    var Question41;
    var Question42;
    var Question43;
    var Question5;
    var Question51;
    var Question52;
    var Question53;
    //Keep track of girls attraction.
    var love;

    var AskNumber;
    var cursors;


    var bodyDry;
    
    function create() {

        //  We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        background = game.add.tileSprite(0,0,800,600,'background');
        //  A simple background for our game
        Question1 = game.add.sprite(game.world.centerX,game.world.centerY, 'question1');
        Question11 = game.add.sprite(game.world.centerX,game.world.centerY - 30, 'question11');
        Question12 = game.add.sprite(game.world.centerX,game.world.centerY - 60, 'question12');
        Question13 = game.add.sprite(game.world.centerX,game.world.centerY - 90, 'question13');
        //spaceship.scale.x = .15;
        //spaceship.scale.y = .15;

        game.physics.enable(spaceship, Phaser.Physics.ARCADE);

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

    function update() {
        
        boolean QuestionOneAnswered = false;
        cursors = game.input.keyboard.createCursorKeys();
        if(cursors.1.isPressed && QuestionOneAnswered = false){
            love = love + 1;
            QuestionOneAnswered = true;
        }
        else if(cursors.2.isPressed && QuestionOneAnswered = false){
            love = love - 1;
            QuestionOneAnswered = true;
        }
        else if(cursors.3.isPressed && QuestionOneAnswered = false){
            love = love - 1;
            QuestionOneAnswered = true;
        }

        
    }
};
