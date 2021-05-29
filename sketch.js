var bird, birdImage;
var backgroundImage , background ;
var pipe , pipeImage , pipe2 , pipe2Image,pipeGroup,pipe1Group;
var score = 0;

function preload(){
birdImage = loadImage("images/Flappybird.png")
pipeImage = loadImage("images/pipe.png")
pipe2Image = loadImage("images/pipe2.png")
backgroundImage  = loadImage("images/background2.png")
}

function setup(){
  createCanvas(1200,600)
  background= createSprite(200,200,20,20)
  background.addImage(backgroundImage)
  bird = createSprite(200,200,20,20)
  bird.addImage(birdImage)
  bird.scale = 0.5
  background.velocityX = -3
  pipeGroup = new Group()
  pipe1Group = new Group()

}
  
function draw(){
  if(background.x<200){
    background.x = 1000
  }
  if(keyWentDown("SPACE")){
    bird.velocityY = -5
  }
  bird.velocityY = bird.velocityY+0.8
  score = score + Math.round(frameCount/60);
  obstacles();
  obstacles2();
  drawSprites();
  text(score,1150,50)
  if(bird.isTouching(pipe1Group)||bird.isTouching(pipe1Group)||bird.y>600 ){
    text("Game Over", 200,200)
    background.velocityX = 0
    pipeGroup.SetVelocityXEach(0)
    pipe1Group.SetVelocityXEach(0)
    pipe1Group.SetLifetimeEach(0)
    pipeGroup.SetLifeTimeEach(0)
  }
}

function obstacles(){
  if(frameCount%100===0){
    pipe = createSprite(1000,600,20,20)
    pipe.addImage(pipeImage)
    //pipe.x = round(random(400,1000))
    pipe.y = round(random(500,600))
    pipe.velocityX = -3
    pipe.scale = 0.5
   pipeGroup.add(pipe)
  }
}

function obstacles2(){
  if(frameCount%100===0){
    pipe2 = createSprite(1000,100,20,20)
    pipe2.addImage(pipe2Image)
    pipe2.velocityX = -3
    pipe2.scale = 0.5
    pipe2.y = random(random(10,120))
    pipe1Group.add(pipe2)
  }
}
