var bullet,wall;
var speed, weight;
var thickness;



function setup() {
  createCanvas(1280,400);
  speed = random(22,100);
  weight = random (30,52);
  thickness = random (22,83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white")

  wall = createSprite (600,200,thickness,height/2);
  wall.shapeColor = color (80,80,80);

  
}

function draw() {
  background("black");  
  
  

  if (Collided(bullet,wall)){
  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509/(thickness*thickness*thickness);

  if (deformation>180){
  bullet.shapeColor = ("pink");
  }
  
  if (deformation<180 && deformation>100){
  bullet.shapeColor = ("cyan");
  }

  if (deformation<100){
  bullet.shapeColor = ("lightgreen")

  }
  }

  drawSprites();
}




function Collided (bullet, wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if (bulletRightEdge >= wallLeftEdge){
  return true;

}
return false

}