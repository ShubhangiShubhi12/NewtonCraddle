
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;



function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  roof= new Roof(380,60,325,15);
  bobObject=new Bob(380,300,30);
  bobObject2=new Bob(bobObject.x+60,300,30);
  bobObject3=new Bob(bobObject2.x+60,300,30);
  bobObject4=new Bob(bobObject.x-60,300,30);
  bobObject5=new Bob(bobObject4.x-60,300,30);
  //rope1=new rope(bob1.body,toproof.body,-60*2,0);
  rope1=new Rope(bobObject.body,roof.body,0,0);
  rope2=new Rope(bobObject2.body,roof.body,60,0);
  rope3=new Rope(bobObject3.body,roof.body,120,0);
  rope4=new Rope(bobObject4.body,roof.body,-60,0);
  rope5=new Rope(bobObject5.body,roof.body,-120,0);

}

function draw() {
  background("lightgrey");  

  Engine.update(engine);
 
  roof.display();
  bobObject.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(bobObject5.body,bobObject3.body.position,{x:-115,y:-115});
  }
}