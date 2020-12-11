const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var alien1, alien2, alien3, alien4, alien5, alien6, alien7, alien0;
var alien8, alien9, alien10, alien11, alien12, alien13, alien14, alien15;
var ground;
var shooter, bullet;

function preload(){
  bg = loadImage("images/spaceInvadersImg.png")
}


function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world; 

//first row of aliens
alien0 = new Alien(55, 100, 20, 20)
alien1 = new Alien(90, 100, 20, 20)
alien2 = new Alien(125, 100, 20, 20)
alien3 = new Alien(160, 100, 20, 20)
alien4 = new Alien(195, 100, 20, 20)
alien5 = new Alien(230, 100, 20, 20)
alien6 = new Alien(265, 100, 20,20)
alien7 = new Alien(300, 100, 20, 20)

alien8 = new Alieny(55, 125, 20, 30)
alien9 = new Alieny(90, 125, 20, 30)
alien10 = new Alieny(125, 125, 20, 30)
alien11= new Alieny(160, 125, 20, 30)
alien12= new Alieny(195, 125, 20, 30)
alien13= new Alieny(230, 125, 20, 30)
alien14= new Alieny(265, 125, 20,30)
alien15= new Alieny(300, 125, 20, 30)

alien16 = new Alienr(50, 150, 27, 40)
alien17 = new Alienr(85, 150, 27, 40)
alien18 = new Alienr(120, 150, 27, 40)
alien19= new Alienr(155, 150, 27, 40)
alien20= new Alienr(190, 150, 27, 40)
alien21= new Alienr(225, 150, 27, 40)
alien22= new Alienr(260, 150, 27,40)
alien23= new Alienr(295, 150, 27, 40)

ground = new Ground(200, 350, 400, 20)


shooter = new Turret(200, 310, 40, 40)

bullet = new Bullet(200, 200, 10, 10)
}

function draw() {
  background(bg)
  Engine.update(engine)
  alien0.display()
  alien1.display()
  alien2.display()
  alien3.display()
  alien4.display()
  alien5.display()
  alien6.display()
  alien7.display()

  alien8.display()
  alien9.display()
  alien10.display()
  alien11.display()
  alien12.display()
  alien13.display()
  alien14.display()
  alien15.display()

  
  
  drawSprites();
  ground.display()

  shooter.display()

  alien16.display()
  alien17.display()
  alien18.display()
  alien19.display()
  alien20.display()
  alien21.display()
  alien22.display()
  alien23.display()
  bullet.display()



}
