var climber, climberImg
var door,doorImg
var ghostImg,ghost
var towerImg, tower;
var doorG,climberG
var inv, invG;
//create gameState PLAY and END;

function preload(){
ghostImg = loadImage("ghost-jumping.png")
ghostStand = loadImage("ghost-standing.png")
climberImg = loadImage("climber.png")
doorImg = loadImage("door.png")
towerImg = loadImage("tower.png")
//load Sound
    
}

function setup(){
createCanvas(600,600);
  //create ghost sprite and add image 
    tower = createSprite(300, 300);
    tower.addImage("tower", towerImg);
    ghost= createSprite(300, 300);
    ghost.addImage("ghost", ghostImg);
    ghost.scale = 0.3;
   
   
    //create groups for door and climber
    doorG = createGroup()
    climberG = createGroup()
  invG = createGroup()

}

function draw(){
    background(0);
    //create infinite tower

    //write a if condition for PLAY state
    tower.velocityY = 4
    if(tower.y > 600){
       tower.y =  tower.width/2;
    }
doorSpawn();
   
     if(keyDown("space")){
         ghost.velocityY = -5
     }
     //add gravity 
    ghost.velocityY = ghost.velocityY + 0.2
    if(keyDown("left")){
        ghost.x = ghost.x - 3
    }
    if(keyDown("right")){
        ghost.x = ghost.x + 3
    }
    //set the velocity of ghost to 0 when touches climber
      if(ghost.isTouching(climberG)){
          ghost.setVelocity(0,0)
    }
    //condition to switch from PLAY to END


      //if condition for end state
    
    
    
drawSprites();
}

function doorSpawn() {
    //generate doors after 150 frames
    if (frameCount % 150 === 0) {
        door = createSprite(Math.round(random(50, 500)), -50);
        door.addImage("door", doorImg);
        door.velocityY = 2;
        door.lifetime = 300
        doorG.add(door)
        //create climber
        climber = createSprite(door.x, 0);
        climber.addImage("climber", climberImg);
        climber.velocityY = 2;
        climber.lifetime = 300
        climberG.add(climber);

        //create an invisible sprite below the climber
        inv = createSprite(climber.x, 10, climber.width, 5);
        
        inv.velocityY = 2;
        inv.lifetime = 300
        invG.add(inv);

//set the depth of trex more than doors
        ghost.depth = door.depth;
        ghost.depth += 1;

    }


}







