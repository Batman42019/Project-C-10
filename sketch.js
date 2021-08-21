
var ship, ship_running;
var water,water_image;
function preload(){
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
water_image=loadImage( "sea.png");
}

function setup(){
  createCanvas(500,500);
  background("blue");
  water=createSprite(300,180,600,20)
  water.addImage(water_image);
  water.velocityX=-8
  water.scale=0.3;
  ship=createSprite(130,200,10,210);
  ship.addAnimation("running",ship_running);
  ship.scale=0.25;
}

function draw() {
  background(0);
  water.velocityX=-3;
  //ship.collide(water);
  if(water.x<0){
    water.x=water.width/8;
  }
    
 drawSprites();
}