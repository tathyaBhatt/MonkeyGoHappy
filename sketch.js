
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, ground, ground2
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}


function setup() {
  createCanvas(500, 500)
monkey = createSprite(150, 430, 10, 10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.15  
    ground = createSprite(250, 480,500, 10);
  ground.velocityX = -10;
  obstacleGroup = new Group();
foodGroup = new Group();
}


function draw() {
background(220);
  textSize(30)
  score = score + Math.round(getFrameRate()/60);
  text("Survival time:"+ score, 150, 60);  
  monkey.collide(ground);
  if(ground.x >5){
    ground.x = 250
  }
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  swampObstacles();
  swampBananas();
  drawSprites();
  
}

function swampObstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(500, 440, 40, 40);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8
    obstacle.lifetime = 60
  }
}

function swampBananas(){
  if(frameCount%80 === 0){
    banana = createSprite(510, Math.round(random(120, 200)), 10, 10);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1
    banana.velocityX = -10
    banana.lifetine = 100;
  }
}


