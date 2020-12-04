const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;
var dustbinSprite;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	
	

	paper = new Paper(200,450,70);
	ground = new ground(width/2,670,width,20);
	dustbin = new Dustbin(1200,650);	
	
			
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  //dustbin.display();
  
  paper.display();
  ground.display();
  dustbin.display();
  //drawSprites();
 }

 function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{
		x: 330,
		y: -445
	  });
	}
 }


