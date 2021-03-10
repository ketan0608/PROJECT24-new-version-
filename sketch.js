const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
var canvas =  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
 ground = new Plane(400,690,800,20);
  hammer1 = new Hammer(350,400);
 stone1 = new Stone(600,300,10,10);
  //rubber1 = new Rubber(200,100,80,80);
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  hammer1.display();
stone1.display();
 //rubber1.display();
}
