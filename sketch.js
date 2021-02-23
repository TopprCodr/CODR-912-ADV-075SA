const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ghost1, bear1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // to create objects
    ground = new Ground(600,height,1200,20)

    ghost1 = new Ghost(700,320,70,70);
    ghost2 = new Ghost(920,320,70,70);
    bear1 = new bear(810, 350);
    // angles are measured using PI 
    log1 = new Log(810,260,300, PI/2);

    ghost3 = new Ghost(700,240,70,70);
    ghost4 = new Ghost(920,240,70,70);
    bear3 = new bear(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    ghost5 = new Ghost(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    pumpkin = new Pumpkin(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);

  //to display objects

    ghost1.display();
    ghost2.display();
    ground.display();
    bear1.display();
    log1.display();

    ghost3.display();
    ghost4.display();
    bear3.display();
    log3.display();

    ghost5.display();
    log4.display();
    log5.display();

    pumpkin.display();
}