function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
background (220);


if (mouseX < width/2) {
    console.log('LEFT');
    text('LEFT', 150, 400);
    ellipse (70, 40, 55, 55)
    color(255, 204, 0);

ellipse (65, 30, 10, 10)
ellipse (80, 30, 10, 10)
arc(65, 50, 30, 21, 0, PI + QUARTER_PI, CHORD);
}

if (mouseX > width/2) {
    console.log('RIGHT');
    text('RIGHT', 600, 400);
    ellipse (670, 40, 55, 55)
 


ellipse (665, 30, 10, 10)
ellipse (680, 30, 10, 10)
arc(665, 50, 30, -10, -40, PI + QUARTER_PI, CHORD);
fill(255, 204, 0);
}





}