const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var compBase
var playBase
var player
var compplayer
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
compBase= new ComputerBase(290,400, 200, 200);
playBase= new PlayerBase(1200, 400, 200, 200);
player= new Player(1200, 260, 40, 140);
compplayer= new CompPlayer(290, 260, 40, 140);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
compplayer.display();
   compBase.display();
player.display();
playBase.display();

   //display Player and computerplayer


}
