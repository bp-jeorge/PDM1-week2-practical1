function setup() {
    createCanvas(600,600);
}

function draw() {
    background(255,150,0);
    noStroke();
    fill(255,0,0);
    rect(width/2,0,width,height/2);
    fill(150,0,150);
    rect(width/2,height/2,width,height);
    fill(150,0,255);
    rect(width*0.75,height/2,width,height);
    fill(255,0,255);
    rect(width*0.75,height*0.75,width,height)
}