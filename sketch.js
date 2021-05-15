const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var flag = 0;

function setup() {
  createCanvas(1200, 500);
  engine = Engine.create();
	world = engine.world;
  ground1 = new Ground(200,400,1000,10);

  box = new Block(420,100,40,40);
  box1 = new Block(420,120,40,40);
  box2 = new Block(420,130,40,40);
  box3 = new Block(420,140,40,40);
  box4 = new Block(420,100,40,40);
  box5 = new Block(420,120,40,40);
  box6 = new Block(420,130,40,40);

  box7 = new Block(470,120,40,40);
  box8 = new Block(470,130,40,40);
  box9 = new Block(470,140,40,40);
  box10 = new Block(470,100,40,40);
  box11 = new Block(470,120,40,40);
  box12 = new Block(470,130,40,40);

  box13 = new Block(520,140,40,40);
  box14 = new Block(520,140,40,40);
  box15 = new Block(520,140,40,40);
  box16 = new Block(520,140,40,40);
  box17 = new Block(520,140,40,40);
  box18 = new Block(520,140,40,40);
  box19 = new Block(520,100,40,40);
  box20 = new Block(520,10,40,40);

  box21 = new Block(570,140,40,40);
  box22 = new Block(570,140,40,40);
  box23 = new Block(570,140,40,40);
  box24 = new Block(570,100,40,40);
  box25 = new Block(570,100,40,40);

  superhero = new Hero(100,300,200,120);

 launcher1= new Launcher(superhero.body,{x:220,y:230})

  monster = new Monster(670,300,125,110);
  Engine.run(engine);
}

function draw() {
  background(168, 209, 223);
  
  ground1.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

 //launcher1.display();

  superhero.display();
  monster.display();

  var crash = Matter.SAT.collides(superhero.body,monster.body);
  if(crash.collided){
    flag=1
  }
  var crash = Matter.SAT.collides(box25.body,monster.body);
  if(crash.collided){
    flag=1
  }
  var crash = Matter.SAT.collides(box24.body,monster.body);
  if(crash.collided){
    flag=1
  }
  var crash = Matter.SAT.collides(box23.body,monster.body);
  if(crash.collided){
    flag=1
  }
  var crash = Matter.SAT.collides(box22.body,monster.body);
  if(crash.collided){
    flag=1
  }
  var crash = Matter.SAT.collides(box21.body,monster.body);
  if(crash.collided){
    flag=1
  }
  var crash = Matter.SAT.collides(box20.body,monster.body);
  if(crash.collided){
    flag=1
  }
  if(flag===1){
    flag=1
  } 

}
 
function mouseDragged(){
  if(flag===0){
  Matter.Body.setPosition(superhero.body,{x:mouseX, y:mouseY});
}
}

