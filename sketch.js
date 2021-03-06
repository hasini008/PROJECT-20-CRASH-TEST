var car , wall;
var speed , weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(80 , 200 , 70 , 50);
  speed = random(55,90);
  car.velocityX = speed;

  wall = createSprite( 600 , 200 , 60 , height/2);
  wall.shapeColor = color("black");
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);
  if(wall.x - car.x < (car.width + wall.width)/2){
     car.velocityX = 0;
     var deformation = 0.5 * weight * speed * speed/22509;
     if(deformation > 180 ){
         car.shapeColor = color("red");
     }
     if(deformation < 180 && deformation > 100){
        car.shapeColor = color("yellow");
     }
     if(deformation < 100){
         car.shapeColor = color("green");
     }
  }  
  drawSprites();
}
