var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e940ea7f-b351-4bcd-b410-b24a8be8a162"],"propsByKey":{"e940ea7f-b351-4bcd-b410-b24a8be8a162":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","frameSize":{"x":119,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 3;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var gameState = "play";




  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  car1.velocityY =-8;
  car2.velocityY =8;
  car3.velocityY =-8;
  car4.velocityY =8;
 
//adicione velocidade para fazer o carro se mover.

function draw() {
   background("white");
   textSize(19);
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
 Game();





createEdgeSprites(); 
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
  
  
  
  if(keyDown(RIGHT)){
 sam.x = sam.x+2;
}

if(keyDown(LEFT)){
sam.x = sam.x-2;
}

if (keyDown(UP_ARROW)){

sam.y = sam.y -2;

}

if(keyDown(DOWN_ARROW)){
sam.y =sam.y +2;

}

 if(sam.isTouching(car1)){

life = life -1;

}

 if(sam.isTouching(car2)){

life = life -1;

}


 if(sam.isTouching(car3)){

life = life -1;

}

 if(sam.isTouching(car4)){

life = life -1;

}







 drawSprites();

}




function Game(){



if (gameState == "play") {
  
  
  
  if(life == 2)
    gameState = "end";
  }


if (gameState == "end"){
fill("black");
textSize(20);
text("you is died",40,100);
sam.x=20;
sam.y=190;

 if(keyDown("space")){
  gameState = "play2";                                         
 
}


}

if (gameState == "play2"){
if(life == 1)
    gameState = "end2";


}

}

if (gameState == "end2"){
fill("black");
textSize(20);
text("you is died",40,100);
sam.x=20;
sam.y=190;


if(keyDown("space")){
  gameState = "play3";
}

}

if (gameState == "play3"){
if(life == 0){
    gameState = "end3";
}

}


if (gameState == "end3"){
fill("black");
textSize(40);
text("you is died",150,200);
sam.x=20;
sam.y=190;
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
