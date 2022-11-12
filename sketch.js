function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

}

function draw() {
    background(150);

    noStroke();

    //Background
    fill('#405C36')
    square(0, 0, 800)

    //Circles
    fill('#FFFFFF')
    ellipse(400, 400, 600, 600);
    fill('#405C36')
    ellipse(400, 400, 570, 570);

    //Indents
    fill('#405C36')
    square(385, 90, 30)
    triangle(120, 690, 180, 690, 290, 580);
    triangle(290, 580, 260, 580, 120, 690);
    triangle(680, 690, 620, 690, 510, 580);
    triangle(510, 580, 540, 580, 680, 690);

    triangle(600, 360, 700, 330, 700, 300)
    triangle(600, 330, 700, 330, 700, 300)

    triangle(200, 360, 100, 330, 100, 300)
    triangle(200, 330, 100, 330, 100, 300)

    //The Star
    fill('#FFFFFF')
    triangle(320, 430, 480, 430, 400, 180);
    triangle(320, 430, 400, 330, 200, 330);
    triangle(300, 330, 480, 430, 600, 330);
    triangle(270, 580, 450, 430, 320, 430);
    triangle(350, 430, 540, 580, 480, 430);
    square(340, 330, 120)







}