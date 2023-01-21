const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const collisionsLevel1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function parse2D(data){
    const rows = [];
    for(let i = 0; i < data.length; i+=16){
        rows.push(data.slice(i, i + 16));
    }
    return rows;
}

class CollisionBlock {
    constructor({canvas, position}){
        this.c = canvas;
        this.position = position;
        this.width = 64;
        this.height = 64;
    }

    draw(){
        this.c.fillStyle = 'rgba(255,0,0,0.5)';
        this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

export const collisionBlocks = [];

export const parsedCollisions =  parse2D(collisionsLevel1);
parsedCollisions.forEach((row, y) => {
    row.forEach((cell, x) => {
       if(cell === 292){
        //push new collision object to array
        collisionBlocks.push(new CollisionBlock({canvas: c, position: {x: x * 64, y: y * 64}}));
       }
    })
});
