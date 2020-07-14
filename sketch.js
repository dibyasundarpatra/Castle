const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {isStatic : true}
  ground = Bodies.rectangle(400,380,800,20,options)
  World.add(world,ground);
  box1 = new Box(300,270,50,200);
  box2 = new Box(128,270,50,200);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  text(mouseX + ' , '+mouseY, mouseX, mouseY);
  box1.display()
  box2.display()
  rectMode(CENTER);
  fill(190);
  rect(ground.position.x,ground.position.y,800,20);
  triangle(230,180,370,180,300,90);
  triangle(10,90,420,90,200,50);
  triangle(50,180,200,180,130,90);
  
}