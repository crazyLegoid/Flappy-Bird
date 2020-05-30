class Bird{

    constructor(){

        this.y = height/2;
        this.x = 64;
        this.grav = 0.6;
        this.velY = 0;
        this.upForce = -17;
        this.image = loadImage("Images/Angry.png")

    }

    display(){

        fill(255);
        ellipse(this.x, this.y, 32, 32);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 55, 55);

    }

    update(){

        this.velY +=this.grav;
        this.y +=this.velY;

        if(this.y > height){

            this.y = height;
            this.velY = 0;

        }

    }

    up(){

        this.velY += this.upForce;

    }

}