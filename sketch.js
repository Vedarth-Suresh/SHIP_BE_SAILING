var ship;
var shipImg;
var sea;
var seaImg;





function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);


  sea = createSprite(0,200,3000,10); 
  sea.addImage("seaing", seaImg);
  sea.scale = 1
  ship = createSprite(200,240,10,10);
  ship.addAnimation("shipping", shipImg);
  ship.scale = 0.4

  
}

function draw() {
  background("blue");
 
  sea.velocityX = -2;  
 
  if (sea.x < 0 ){
    sea.x = sea.width/2;
  }

  drawSprites();
}
