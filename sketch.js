
var inc = 0.1;
var mouseInc = 0.01
var scl = 20;
var cols, rows;

function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  cols = floor(windowWidth/scl);
  rows = floor(windowHeight/scl);
}

function draw() {
  background("black");
  var yOff = 0;
  for(var y = 0; y < rows; y++) {
    var xOff = 0;
    for(var x = 0; x < cols; x++){
      push();
      translate(x*scl+scl/2, y*scl+scl/2);
      // Coordinates of the vectors
      let xVect = map(noise(xOff+mouseX*mouseInc,yOff+mouseY*mouseInc,0), 0, 1, -scl*5/4, scl*5/4);
      let yVect = map(noise(xOff+mouseX*mouseInc,yOff+mouseY*mouseInc,1), 0, 1, -scl*5/4, scl*5/4);
      // Set weight and color
      let vectLength = sqrt(pow(xVect,2)+pow(yVect,2));
      let maxVectLength = sqrt(2)*scl*5/4;
      strokeWeight(vectLength/maxVectLength * 6);
      //stroke(lerpColor(color("#ffbd00"), color("#390099"), vectLength/maxVectLength*1.3));
      stroke(lerpColor(color("#f5cc00"), color("#19647e"), vectLength/maxVectLength*1.3));
      // Print arrow
      arrow(0, 0, xVect, yVect);
      pop();

      xOff += inc;
    }
    yOff += inc;
  }


}

function arrow (x1, y1, x2, y2) {
  push();
  translate(x1, y1);
  x = x2-x1;
  y = y2-y1;
  line(0, 0, x, y);
  translate(x*2/3,y*2/3);
  line(y/4, -x/4, x*1/3, y*1/3);
  line(-y/4, x/4, x*1/3, y*1/3);
  pop();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
