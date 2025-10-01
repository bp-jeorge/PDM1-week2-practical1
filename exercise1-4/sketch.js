function setup() {
    createCanvas(600,600);
}

function draw() {
    background(255);
    rectMode(CENTER);
    fill(150,0,255);
    rect(300,300,mouseX*2-width,mouseY*2-height);
}