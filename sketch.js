
var music;
var wall1,wall2,wall3,wall4;
var ball;
var edge1,edge2,edge3,edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
createCanvas(800,600);

    //create 4 different surfaces
    wall1 = createSprite(700,580,180,20);
    wall1.shapeColor = "orange";

    wall2 = createSprite(500,580,180,20);
    wall2.shapeColor = "green";

    wall3 = createSprite(300,580,180,20);
    wall3.shapeColor = "blue";

    wall4 = createSprite(100,580,180,20);
    wall4.shapeColor = "maroon";

    //create box sprite and give velocity
    ball = createSprite(400,300,20,20);
    ball.shapeColor = "white";

    ball.velocityX = 10;
    ball.velocityY = 10;
      
    edge1 = createSprite(800,300,15,800);
    edge1.shapeColor = "purple";

    edge2 = createSprite(01,300,10,800);
    edge2.shapeColor = "purple";

    edge3 = createSprite(400,05,800,10);
    edge3.shapeColor = "purple";

    edge4 = createSprite(400,600,800,10);
    edge4.shapeColor = "purple";

   

}

function draw() {
    background("black");
    //create edgeSprite
    createEdgeSprites();

    if(ball.isTouching(wall3)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.play();
    }

   

    if(ball.isTouching(wall1)&&ball.bounceOff(wall1)){
        ball.shapeColor = "orange";
    }
    if(ball.isTouching(wall2)&&ball.bounceOff(wall2)){
        ball.shapeColor = "green";
    }
    if(ball.isTouching(wall3)&&ball.bounceOff(wall3)){
        ball.shapeColor = "blue";
    }
    if(ball.isTouching(wall4)&&ball.bounceOff(wall4)){
        ball.shapeColor = "maroon";
    }

    ball.bounceOff(edge1);
    ball.bounceOff(edge2);
    ball.bounceOff(edge3);
    ball.bounceOff(edge4);



    //add condition to check if box touching surface and make it box

   

    drawSprites();
}
