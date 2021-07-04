var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivaltime;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 FoodGroup = createGroup();
obstacleGroup = createGroup();
 
}



function setup() {
createCanvas(600,315);
  
  monkey=createSprite(80,280,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1;

 ground=createSprite(0,315,200005,10);
  ground.shapeColor="yellow"
  ground.velocityX= -6
  ground.X=ground.width/200;
  console.log(ground.X);
  
  score=0;
  survivaltime=0;
  
}


function draw() {
  if(keyDown("space")&&monkey.y >= 250){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.4
  monkey.collide(ground)
  
  background("green")
  stroke("blue")
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivaltime :"+survivaltime,100,50);
  
  stroke("black");
  fill("black");
  text("score:"+score,500,50);
  
 


if(frameCount%200===0){
  fruits();
  } else
  if(frameCount%300===0){
    obstacle();
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+2;
    
    
  }
                        
  if(monkey.isTouching(obstacleGroup)){
   monkey.visible=false
    FoodGroup.visible=false
    obstacleGroup.visible=false
    ground.velocity=0
    textSize(40);
    text("GAME OVER",200,200);
    }
  drawSprites();
}

function fruits(){
  var fruit=createSprite(500,100,10,10);
  fruit.addImage(bananaImage);
  fruit.velocityX=-4
  fruit.lifetime=150;
  fruit.scale=0.1
FoodGroup.add( fruit); 
}

function obstacle(){
  var obstacle=createSprite(500,300,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-(4 + survivaltime/10);
  obstacleGroup.add(obstacle)
   
}
          

