
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;
var block2;
var block3;
var chao;

function preload(){
	


}

function setup() {
	createCanvas(800, 700);

	var plane_options = {

		isStatic: true

	}

	var block1_options = {

		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0

	}

	var block2_options = {

		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1

	}

	var block3_options = {

		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3

	}



	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	block1 = Bodies.circle(220,10,60,block1_options);
	World.add(world,block1);
	

	block2 = Bodies.rectangle(110,50,100,100,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,70,100,block3_options);
	World.add(world,block3);

	chao = Bodies.rectangle(10,500,800,20,plane_options);
	World.add(world,chao);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("white");
  Engine.update(engine);
  drawSprites();

 noFill();
 stroke("black");
 rect(chao.position.x,chao.position.y,800,20);
 fill("lightgreen");
 ellipse(block1.position.x,block1.position.y,60);
 rect(block2.position.x,block2.position.y,100,100);
 rect(block3.position.x,block3.position.y,70,100);
 
}



