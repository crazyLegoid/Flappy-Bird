class Pipe{

    constructor(){

        this.top = random(height/2);
        this.bottom = random(height/2);
        this.w = 20;
        this.x = width;
        this.speed = 5;

    }

    display(){

        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);

    }

    update(){

        this.x -= this.speed;

    }

    offscreen(){

        if(this.x < - this.w){

            return true;

        }else{

            return false;

        }

    }

    hits(body){

        if(body.y < this.top || body.y > height - this.bottom){

            if(body.x >this.x && bird.x < this.x + this.w){

                return true;

            }

            return false;

        }

    }

}