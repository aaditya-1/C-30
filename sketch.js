
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var box21;
var box22;
var box23;
var box24;
var box25;
var box26;
var box27;
var box28;
var box29;
var box30;

var hexagon;
var rope;

var ground;

var shelf1, shelf2;


// function preload()
// {

// }

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	// First row.

	box1 = new Box(300, 400);
	box2 = new Box(325, 400);
	box3 = new Box(350, 400);
	box4 = new Box(375, 400);
	box5 = new Box(400, 400);

	// second row.

	box6 = new Box(312, 355);
	box7 = new Box(337, 355);
	box8 = new Box(362, 355);
	box9 = new Box(387, 355);

	// third row

	box10 = new Box(324, 310);
	box11 = new Box(349, 310);
	box12 = new Box(374, 310);

	// fourth row

	box13 = new Box(349, 265);

	// 1st row

	box14 = new Box(800, 450);
	box15 = new Box(825, 450);
	box16 = new Box(850, 450);
	box17 = new Box(875, 450);
	box18 = new Box(900, 450);

	// 2nd row

	box19 = new Box(812, 405);
	box20 = new Box(837, 405);
	box21 = new Box(862, 405);
	box22 = new Box(887, 405);

	// 3rd row

	box23 = new Box(824, 360);
	box24 = new Box(849, 360);
	box25 = new Box(874, 360);

	// 4th row

	box26 = new Box(849, 315);


	//  shelf
	shelf1 = new Shelf(350, 450, 150, 20);
	shelf2 = new Shelf(850, 500, 150, 20);


	hexagon = new Ball(105, 300);
	rope = new Rope(hexagon.body, { x: 100, y: 250 });

	ground = new Ground(750, 690, 1500, 20);


	Engine.run(engine);

}


function draw() {

	Engine.update(engine);

	rectMode(CENTER);
	background(145, 125, 150);

	fill("Yellow");
	stroke("silver")
	strokeWeight(0.5);

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();

	fill("green");

	box6.display();
	box7.display();
	box8.display();
	box9.display();

	fill("Orange");

	box10.display();
	box11.display();
	box12.display();

	fill("red");

	box13.display();

	fill("Yellow");

	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();

	fill("green");

	box19.display();
	box20.display();
	box21.display();
	box22.display();

	fill("Orange");

	box23.display();
	box24.display();
	box25.display();

	fill("red");

	box26.display();

	fill("black");

	shelf1.display();
	shelf2.display();
	rope.display();
	hexagon.display();

	fill("brown");
	stroke("silver");
	strokeWeight(0.5);
	ground.display();

	fill("orange")
	textSize(30);
	text("Drag to shoot and space to attach", 270, 50);

}

function mouseDragged() {

	Matter.Body.setPosition(hexagon.body, { x: mouseX, y: mouseY });


}

function mouseReleased() {
	rope.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		rope.attach(hexagon.body);
	}
}