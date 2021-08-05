
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player, eShip, eShipGroup, bship,pship,oceanIMG ;
var ocean
var health = 100;
var gameState = "play" 
var arrow
var arrowsGroup

function preload()
{
	myShip = loadImage("myship.png");
	eShipIMG = loadImage("enemyship.png");
	bShipIMG = loadImage("bigenemyship.png");
	pshipIMG = loadImage("pship.png");
	oceanIMG = loadImage("ocean.jpg")
  }
  
function setup() {
	//createCanvas(displayWidth, displayHeight- 100);
createCanvas(1300,600);
	eShipGroup = new Group();

	engine = Engine.create();
	world = engine.world;

	//Create the sprites Here.
	//player = createSprite(width/2, displayHeight - 200, 50,50);
	player = createSprite(600,300);
    player.addImage(myShip);
	player.scale = 0.3

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black");

  ocean = createSprite(1300,600);
  ocean.addImage(oceanIMG);
  ocean.scale = 3.5;
  
  
  //moving the player left and right
  if(keyDown("left")){
    player.x = player.x - 10
  }

  if(keyDown("right")){
    player.x = player.x + 10
  }

  for (var i = 0; i < eShipGroup.length; i++) {
	if (eShipGroup.get(i).isTouching(player)) {
		eShipGroup.get(i).destroy();
		health = health - 10;	
	}
	
}

  eShips();

  drawSprites();

  textSize(25);
  fill("black")
  stroke(5);
 // text("Health :"+ health,displayWidth- 200, 30);
 text("Health :"+ health,1000,50);
}


function eShips() {
	//write code here to spawn the ship
	if (frameCount % 60 === 0) {
	//   eShip = createSprite(displayWidth/2,0,40,40);
	  eShip = createSprite(700,350)
	//   eShip.x = random(100,displayWidth - 100);
	 eShip.x = random(100,700);
	  eShip.velocityY = 4;
	  
	  var rand = Math.round(random(1,2));
	  switch(rand){
           
      case 1: eShip.addImage(eShipIMG);
	  eShip.scale = 0.4;
	  break;
	  case 2: eShip.addImage(bShipIMG);
	  eShip.scale = 0.3;
	  break;

	  default : break;
	  }
	  
	   //assign lifetime to the variable
	  eShip.lifetime = 500;
	  
	  //adjust the depth
	  eShip.depth = player.depth;
	  player.depth = player.depth + 1;
	  
	  //add each ship to the group
	  eShipGroup.add(eShip);
	}
	
  }


