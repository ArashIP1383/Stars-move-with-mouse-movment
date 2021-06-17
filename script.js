const starCount = (window.innerWidth + window.innerHeight) / 8,
    starSize = 3,
    starMinScale = 0.2,
    overflowThreshold = 50;

const canvas  = document.querySelector('canvas'),
    context = canvas.getContext('2d');

let scale = 1,
    width,
    height;

let stars = [];

let pointerX,
    pointerY;

let velocity = { x:0, y:0, tx:0, ty:0, z:0.0005 }

generate();
resize();
Step();

window.onresize = resize;
canvas.onmousemove = onMouseMove;
canvas.ontouchend = onMouseLeave;
document.onmouseleave = onMouseLeave;

function generate(){
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x:0,
            y:0,
            z: starMinScale + Math.random() * (1 - starMinScale)
        });
        
    }
}

function placeStart(star){
    star.x = Math.random() * width;
    star.y = Math.random() * height;
}

function recycleStart(star){
    let direction = 'z';
    let vx = Math.abs(velocity.x),
        vy = Math.abs(velocity.y);

    if(vx > 1 || vy > 1){
        let axis;

        if(vx > vy){
            axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';

        } else{
            axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
        }
    }
}