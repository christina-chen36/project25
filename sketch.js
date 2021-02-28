const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject, paper;
var world;

var ball;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  groundObject = new ground(width / 2, 670, width, 20);
  paper = new Paper(200, 200, 100, 100);
  dustbinObj = new dustbin(1200, 650);

  

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  paper.display();
  dustbinObj.display();

  if (keyWentDown("UP")) {
    console.log(paper.body);
    console.log(ball);
    Matter.Body.applyForce(
      paper.body,
      {
        x: paper.body.position.x,
        y: paper.body.position.y,
      },
      {
        x: 600,
        y: -1000,
      }
    );
  }
}
