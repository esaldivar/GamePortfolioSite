import { Player } from './Entities/Player/Player.js';
import { Sprite } from './Entities/Sprite/Sprite.js';
import backgroundLevelOneImg from '../Img/backgroundLevel1.png';
import { collisionBlocks } from './data/collisions.js';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = 64 * 16;
canvas.height = 64 * 9;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);



const backgroundLevel1 = new Sprite({ 
    background: c,
    position: {x: 0, y: 0},
    imageSrc: backgroundLevelOneImg
});


const player = new Player(canvas,c);

const keys = {
    Space: {
        pressed: false
    },
    KeyA: {
        pressed: false
    },
    KeyD: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    backgroundLevel1.draw();
    collisionBlocks.forEach(block => block.draw());

    player.velocity.x = 0;
    if(keys.KeyA.pressed){
        player.velocity.x = -5;
    } else if(keys.KeyD.pressed){
        player.velocity.x = 5;
    } 

    player.draw();
    player.update();
    
}

animate();

window.addEventListener('keydown', (event) => {

    switch(event.code){
        case 'KeyA':
            keys.KeyA.pressed = true;
            break;
        case 'KeyD':
            keys.KeyD.pressed = true;
            break;
        case 'Space':
            if(player.velocity.y === 0){ 
                player.velocity.y = -15;
            }
            break; 
    }
}); 

window.addEventListener('keyup', (event) => {

    switch(event.code){
        case 'KeyA':
            keys.KeyA.pressed = false;
            break;
        case 'KeyD':
            keys.KeyD.pressed = false;
            break;
    }
}); 