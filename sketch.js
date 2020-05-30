var bird;
var jump, deathS;
var pipes = [];
var death = false


function preload(){

  deathS = loadSound("Sounds/death.wav/");
  jump = loadSound("Sounds/jump.wav/");

}


function setup() {
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
  frameRate(60)
}

function draw() {
  background(0);  
  bird.display();
  bird.update();

  if(death === false){

    if(frameCount % 100 == 0){

      pipes.push(new Pipe());

    }

  }

  

  for(var i = pipes.length - 1; i >= 0; i--){

    pipes[i].display();
    pipes[i].update();

    if(pipes[i].hits(bird)){

      death = true;

    }
    
    if(pipes[i].offscreen()){

      pipes.splice(i, 1);
  
    }

    if(death === true){

      pipes[i].speed = 0;

    }


  }

  if(death === true){

    bird.upForce = 0;

  }
  //   deathS.play();
  //   deathS.duration(2);

  // }
  // deathS.stop();
}

function keyPressed(){

  if(key = " " && death === false){

    bird.up();
    jump.play();

  }else{


  }

}
