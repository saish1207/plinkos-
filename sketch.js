const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var particals = []
var  divison = []
var plinkos = []
var divisonHeight = 300

var ground

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,595,1000,10);


  for(var k = 0 ; k<=width ; k=k+ 80){
    divison.push(new Divison(k,height-divisonHeight/2,10,divisonHeight));
   
  }

  for(var j =15 ; j<=width ; j=j+ 50){
    plinkos.push(new Plinkos(j,100))
   
  }

  for(var e =20 ; e<=width ; e=e+ 40){
    plinkos.push(new Plinkos(e,150))
   
  }

  for(var s =25 ; s<=width ; s=s+ 90){
    plinkos.push(new Plinkos(s,200))
   
  }

  if (frameCount % 60 === 0){
    for(var i = 0 ; i<particals.length; i++){
    particals.push(new Particals(random(width/2-10,width/2+10),10,10) )
    }
   }
}
function draw() {
  Engine.update(engine)
  background("black");
  ground.display()
  for(var k = 0 ; k<divison.length ; k++){
   
    divison[k].display()
  }

  for(var j = 0 ; j<plinkos.lengths ; j++){
   
    plinkos[j].display()
  }

  for(var e = 0 ; e<plinkos.length ; e++){
   
    plinkos[e].display()
  }
  for(var s = 0 ; s<plinkos.length ; s++){
   
    plinkos[s].display()
  }
  for(var i = 0 ; i<particals.length; i++){
   
    particals[i].display()
    
  }
  drawSprites()
}
