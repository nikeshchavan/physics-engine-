const Bodies = Matter.Bodies;
 const World = Matter.World;
 const Engine = Matter.Engine;
 var engine,world;
 var object;
 var ground; 
 var ball;
function setup() {
   createCanvas(800,400);
    engine = Engine.create(); 
   world = engine.world;
    var options = {
       isStatic : true 
      } 
      var ball_options = {
        restitution:0.9
      }
      ball = Bodies.circle(300,100,30,ball_options);
      World.add(world,ball);
      ground = Bodies.rectangle(400,390,800,10,options);
      World.add(world,ground);
    object = Bodies.rectangle(100,200,50,50,options);
     World.add(world,object); 
     console.log(ball);
     } 
     function draw() { 
       background("yellow"); 
     Engine.update(engine); 
     rectMode(CENTER);
     rect(ground.position.x,ground.position.y,800,10);
     rect(object.position.x,object.position.y,50,50); 
     rect(400,200,50,50);
     ellipseMode(RADIUS);
     ellipse(ball.position.x,ball.position.y,30);
     }
     
 