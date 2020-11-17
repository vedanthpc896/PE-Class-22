const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies; 
  var engine,world,ground,ball; 

  function setup() {
     var canvas = createCanvas(400,400); 
     engine =Engine.create();
      world = engine.world;                           
      var options = { 
        isStatic:true 
      } 
      ground = Bodies.rectangle(200,380,400,10,options)
       World.add(world,ground); 
       console.log(ground); 
       console.log(ground.position.x); 
       console.log(ground.position.y);
       var options = {
         restitution:1.5
       }

       ball = Bodies.circle(200,280,20,options);
       World.add(world,ball); 

       } function draw() { 
         background("black");
         
         Engine.update(engine)
          rectMode(CENTER); 
          rect(ground.position.x,ground.position.y, 400, 50); 
          ellipseMode(CENTER);
          ellipse(ball.position.x,ball.position.y,20,20);

          drawSprites(); }