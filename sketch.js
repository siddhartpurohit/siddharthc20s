var car , wall;
var speed,weight;






function setup() {
  
  createCanvas(1200,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
car.velocityX = speed;
  wall = createSprite (1000,200,30,height/2);

}

function draw() {
  background(0,0,0);  

if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX = 0;
var deformation  = 0.5*width*speed*speed/22500;

if(deformation<120 ){
  car.shapeColor ="green"
}
if(deformation<180&& deformation>120){
   car.shapeColor ="yellow"
 }
 if(deformation>180){
   car.shapeColor= "red"
 }

}








  drawSprites();
}