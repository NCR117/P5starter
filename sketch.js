function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(150);

    noStroke();

    //Stone Blocks (lighter)
    fill('#5F615F')
    square(100, 700, 100);
    square(300, 700, 100);
    square(500, 700, 100);
    square(700, 700, 100);
    //Stone Blocks (darker)
    fill('#3C3E3C')
    square(0, 700, 100);
    square(200, 700, 100);
    square(400, 700, 100);
    square(600, 700, 100);

    //Dirt Blocks - Lower (darker)
    fill('#361818')
    square(100, 600, 100);
    square(300, 600, 100);
    square(500, 600, 100);
    square(700, 600, 100);
    //Dirt Blocks - Lower (lighter)
    fill('#612424')
    square(0, 600, 100);
    square(200, 600, 100);
    square(400, 600, 100);
    square(600, 600, 100);

    //Dirt Blocks - Upper (lighter)
    fill('#612424')
    square(100, 500, 100);
    square(300, 500, 100);
    square(500, 500, 100);
    square(700, 500, 100);
    //Dirt Blocks - Upper (darker)
    fill('#361818')
    square(0, 500, 100);
    square(200, 500, 100);
    square(400, 500, 100);
    square(600, 500, 100);

    //Grass Blocks (darker)
    fill('#439B24')
    square(100, 400, 100);
    square(300, 400, 100);
    square(500, 400, 100);
    square(700, 400, 100);
    //Grass Blocks (lighter)
    fill('#52BD2D')
    square(0, 400, 100);
    square(200, 400, 100);
    square(400, 400, 100);
    square(600, 400, 100);

    //The Sky (no variants)
    fill('#91E7E7')
    square(0, 375, 25);
    square(0, 300, 25);
    square(0, 325, 25);
    square(0, 350, 25);
    square(100, 250, 100);
    square(100, 200, 50);
    square(75, 375, 25);
    square(75, 300, 25);
    square(75, 325, 25);
    square(75, 350, 25);
    square(100, 300, 100);
    square(100, 300, 100);
    square(0, 100, 100);
    square(100, 100, 100);
    square(700, 300, 100);
    square(750, 200, 50);
    square(750, 250, 50);
    square(700, 250, 50);
    square(700, 150, 50);
    square(750, 150, 50);
    square(200, 0, 100);
    square(300, 0, 100);
    square(400, 0, 100);
    square(500, 0, 100);
    square(600, 0, 100);
    square(700, 0, 100);
    square(750, 100, 50);
    square(700, 100, 50);
    square(650, 100, 50);
    square(600, 100, 50);
    square(550, 100, 50);
    square(500, 100, 50);
    square(450, 100, 50);
    square(400, 100, 50);
    square(350, 100, 50);
    square(300, 100, 50);
    square(250, 100, 50);
    square(200, 100, 50);

    //Building Roof
    fill('#723A12')
    square(150, 200, 50);
    square(700, 200, 50);
    square(200, 150, 100);
    square(300, 150, 100);
    square(400, 150, 100);
    square(500, 150, 100);
    square(600, 150, 100);

    //Building Side
    fill('#BD5318')
    square(600, 300, 100);
    square(200, 300, 100);
    square(350, 300, 100);
    square(450, 350, 50);
    square(500, 350, 50);
    square(550, 350, 50);
    square(600, 250, 50);
    square(650, 250, 50);
    square(550, 250, 50);
    square(500, 250, 50);
    square(450, 250, 50);
    square(400, 250, 50);
    square(350, 250, 50);
    square(300, 250, 50);
    square(250, 250, 50);
    square(200, 250, 50);

    //A Tree
   fill('#406433')
   square(0, 200, 100)
   fill('#8A5415')
   square(25, 300, 50)
   square(25, 350, 50)

   //Door + Window
   fill('#723A12')
   square(300, 300, 50)
   square(300, 350, 50)
   fill('#316A67')
   square(450, 300, 50)
   square(500, 300, 50)
   square(550, 300, 50)

   //The Sun
   fill('#EFFF8C')
   square(0, 0, 100)
   square(100, 0, 100)


}