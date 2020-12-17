const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2;
var ground;

function setup() {
  var canvas = createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;
  
  box1=new Box(200,200,50,50);
  box2=new Box(100,100,50,50);
  
  //ground=new Ground(200,350,400,10);
 
}

function draw() {
  background("black"); 

  Engine.update(engine);

  box1.display();
  box2.display();

  //ground.display();
}