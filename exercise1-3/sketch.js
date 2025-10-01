function setup() {
    createCanvas(500,500);
}

function draw() {
    background(255);
    fill(150,0,255);
    rect(mouseX-50,mouseY-50,100,100);
    rect(mouseX+50,mouseY+50,100,100);
    rect(mouseX-150,mouseY-150,100,100);
}