export class Player {
    constructor(background, c){
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 100;
        this.height = 100;
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.character = c;
        this.canvas = background;
    }

    

    draw(){
        this.character.fillStyle = 'red';
        this.character.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        this.position.x += this.velocity.x;

        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;
        if(this.sides.bottom + this.velocity.y < this.canvas.height){
            this.velocity.y += 1;  
        } else {
            this.velocity.y = 0;
        }
    }

}


