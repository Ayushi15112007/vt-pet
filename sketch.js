//Create variables here
var  dog, dogImg, happydDogImg, database, foodS, foodStock;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/happydogImage.png")
}

function setup() {
	createCanvas(500,500);

 

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  foodStock.set(20);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
  
}


function draw() {  
  bckground("green");
  if(foodS!== undefined){
    textSize(20);
    fill(grey)
    text("PRESS UP ARROW KEY TO FEED",50,50);
    text("food remaning:" +foodS,150,150);

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDogImg);

    }


    if(keyWentDown(UP_ARROW)){
      dog.addImage(dogImg);
    }

    if(foodS === 0){
      foodS = 20;

    }
  

  drawSprites();
  //add styles here
}

}

function writeStock(x){
  if (x<=0){
    x=0;
  }

  else{
    x = x-1;
  }

  databse.ref("/").update({
    Food:x
  });
}

function readStock(data){
  foodS = data.val();
}



