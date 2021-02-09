const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1;
var circle1;
var circle2;
var circle3;
var ball1;
var box1;
var engine, world;


function setup(){
 var canvas = createCanvas(800,700);
 engine = Engine.create();
 world = engine.world;
 ball1= new Ball(360,0,45)
 ground1=new Ground(600,height,1200,20)
 circle1= new Obstacle(490,300,50)
 circle2= new Obstacle(360,500,40)
 circle3= new Obstacle(240,300,50)
 box1= new Box(420,0,50,100)

}

function draw(){
    background("yellow");
   
    ground1.display()
    circle1.display(); 
    circle2.display();
    circle3.display();
    ball1.display() ;
    box1.display();
   
    Engine.update(engine);
     
    
}