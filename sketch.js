
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boyImg,treeImg;
var stone,slingShot;
var fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8,fruit9,fruit10;

function preload()
{
	boyImg = loadImage("images/boy.png");
	treeImg = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
  
  
 

	//Create the Bodies Here.
	fruit1 = new Mango(790,200,50);
  fruit2 = new Mango(800,250,50);
  fruit3 = new Mango(850,230,50);
  fruit4 = new Mango(750,260,50);
  fruit5 = new Mango(900,250,50);
  fruit6 = new Mango(950,300,50);
  fruit7 = new Mango(650,300,50);
  fruit8 = new Mango(800,300,50);
  fruit9 = new Mango(850,350,50);
  fruit10 = new Mango(900,350,50);
	stone = new Stone(50,500,50)
  ground = new Ground(500,660);
	slingShot = new Chain(stone.body,{x:145,y:540});
	Engine.run(engine);
  
}


function draw() {
  background(0, 191, 255);
  imageMode(CENTER);
  image(boyImg,200,600,200,200);
  image(treeImg,800,400,400,500);

  ground.display();
  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  fruit6.display();
  fruit7.display();
  fruit8.display();
  fruit9.display();
  fruit10.display();
  stone.display();
  slingShot.display();
  detectollision(stone,fruit1);
  detectollision(stone,fruit2);
  detectollision(stone,fruit3);
  detectollision(stone,fruit4);
  detectollision(stone,fruit5);
  detectollision(stone,fruit6);
  detectollision(stone,fruit7);
  detectollision(stone,fruit8);
  detectollision(stone,fruit9);
  detectollision(stone,fruit10);


}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
	slingShot.fly();
  }
  
function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone.chain,{x:235,y:420});
    slingShot.attach(stone.body)
  }
}

function detectollision(lstone,lmango){
  var mangopos = lmango.body.position;
  var stonepos = lstone.body.position;

  var distance = dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(stone.body);
  }
}