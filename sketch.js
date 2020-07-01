const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,550,75,75);
    box2 = new Box(1000,550,75,75);
    box3 = new Box(800,450,75,75);
    box4 = new Box(1000,450,75,75);
    box5 = new Box(900,350,75,75);

    ground = new Ground(600,height,1200,20);
    
    pig1 = new Pig(900,550);
    pig2 = new Pig(900,450)
 
    bird1 = new Bird(100,200);

    log1 = new Log(900,500,275,PI/2);
    log2 = new Log(900,400,275,PI/2);
    log3 = new Log(825,330,150,PI/7);
    log4 = new Log(975,330,150,-PI/7);



}

function draw(){
    background(0);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    // console.log(mouseX, mouseY)
    fill("white");
    textSize(30);
    text(mouseX + ":" + mouseY, 100,100);
    // text("hello", 200,200);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}