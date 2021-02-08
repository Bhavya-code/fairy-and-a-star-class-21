var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var invW, invD;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.setCollider("rectangle",490,-25,50,130);
	fairy.debug=false;
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	invW=createSprite(650,375,10,800);
	invW.setCollider("rectangle",-7,0,10,800);
	invW.debug=false;
	invW.visible = false;

	invD=createSprite(400,520,800,20)
	invD.visible=false;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  	background(bgImg);

	fairy.velocityX=0;
	fairy.velocityY=0;

  	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX=2;
  	}

  	if(keyDown("left_arrow")){
		fairy.velocityX=-2;
  	}

	if(keyDown("DOWN_ARROW")){
		star.velocityY=2;
	}

	fairy.bounceOff(invW);
	star.bounce(invD);

  	drawSprites();
}

function keyPressed() {
	//write code here
}
