let square;

function setup(){
    new Canvas(400, 600);
   
    // code to set the gravity of the world
    world.gravity.y=10;
    // code to create a new square sprite
    square= new Sprite(width/2,height/2,40,40);
}

function draw(){
    background(225);
    if(mouse.presses()){
        square.vel.y=-5;
        square.sleeping=false;
    }
    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
}
