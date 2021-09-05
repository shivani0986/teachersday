const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var snow = [];

function preload(){
    backgroundImg=loadImage("miss.png.png")
 }
function setup() {
  createCanvas(1000, 1000);
  engine = Engine.create();
  world = engine.world;
}
function draw() {
  background(backgroundImg);
  Engine.update(engine);

  if(frameCount%5===0){
    snow.push(new Snow(random(0,5000),-10,600))
  }
   for (var i = 0; i < snow.length; i++) {
       snow[i].display();    }
}