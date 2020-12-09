
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p1


function preload()
{
	
}

function setup() {
	 createCanvas(800, 700);
	 p1 = new Paper(100,640,200) ;



	 box1=new Box(450,610,20,100);
	 
	

	 box2=new Box(350,610,20,100);
	
	 
  
	 box3=new Box(400,650,100,20);
	 
	 
	 
	 ground=createSprite(400,665,800,10);

} 	 
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
 box1.display();
 box2.display();
 box3.display();
 p1.display()
  drawSprites();

}



