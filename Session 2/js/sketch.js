//the setup function runs once at the start
function setup() {
    var canvas = createCanvas(600, 600); // controls the canvas size
    canvas.parent("p5container");
}

//the draw function runs 60 times every second in a constant loop
function draw() {
    background(220); //greyscale colour for background

    fill(255, 255, 255); //another colour value
    ellipse(300, 300, 300); // controls the circles size and position

    fill(255, 204, 0);
    square(200, 200, 200);
}