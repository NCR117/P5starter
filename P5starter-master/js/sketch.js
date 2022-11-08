var firstName = 'Will';
var ThisIsAnInteger = 100;
var ThisIsABoolean = true;
var ThisisAnUndefinedVar;
var ThisIsNull = null;

var ellipseX = 400;
var ellipseY = 400;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);
    console.log(ThisIsNull);
}

function draw() {
    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 100);

    console.log(mouseX, mouseY);
}