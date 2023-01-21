export class Sprite {
    constructor({ background, position, imageSrc}){
        this.c = background;
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.draw();
        }
        this.image.src = imageSrc;
        this.loaded = false;
    }
    draw(){
        if(!this.loaded) return;
        this.c.drawImage(this.image, this.position.x, this.position.y);
    }
}