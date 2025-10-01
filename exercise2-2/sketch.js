let up = 0;

function setup() {
    createCanvas(600,600);
}

function draw() {
  
    
    // background
    background(100,150,255);

    // sun
    fill(255,200,0);
    circle(width/2,up,180)
    up = up + 1;

    // foreground
    fill(100,50,0);
    rect(0,height/2,width,height);
    fill(50,150,0);
    rect(0,height/2,width,height/10);
    noStroke();

    // character

    fill(0,0,150);
    rect(mouseX-25,mouseY+25,50,100)
    fill(200,150,150)
    square(mouseX-35,mouseY-35,70);

    
}