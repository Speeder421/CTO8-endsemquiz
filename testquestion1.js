let bird;
let background, birdImg;

function preload(){
    background=loadImage("assets/background.png");
    birdImg=loadImage("assets/bird.png");
}

function setup(){
    new Canvas(400, 600);

    bird=new Sprite();
    bird.x=width/2;
    bird.y=height/2;
    bird.width=34;
    bird.height=24;
    bird.img=birdImg;
   
}
function draw(){
    image(background, 0, 0, width, height);
}