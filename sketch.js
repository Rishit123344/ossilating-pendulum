const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  log = new Log();
  ball = new Ball();
  chain = new Chain(log.body,ball.body);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ball.display();
  log.display();
  chain.display();
if(keyCode===ENTER){
  ball.body.velocity.x=3;
}



  if(keyCode===32){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
}