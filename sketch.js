var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("runner-1.png", "runner-2.png");
 
}
  
function setup(){
  
  createCanvas(400,400);
path = createSprite(200, 20, 200, 200);
path.addImage(pathImg)
path.velocityY = 2
path.scale = 1.2;

boy = createSprite(210, 400, 200, 200);
boy.addAnimation("boy", boyImg);
boy.scale=0.1;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.velocityX = 0 
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
