function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
background (300);


if (mouseX < width/2) {
    console.log('LEFT');
    text('LEFT', 100, 400);
    fill('#00FF00')

    ellipse (400, 400, 400, 400)

}

if (mouseX > width/2) {
    console.log('RIGHT');
    text('RIGHT', 700, 400);
    ellipse (400, 400, 400, 400)
    fill('#FF0000')

    //took me two hours to figure out how to colour these shapes, it seems you can just drop 'fill' anywhere, but only sometimes.
}





}