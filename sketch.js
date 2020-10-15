var hr,mn,sc;
var hrAngle,mnAngle,scAngle;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  
  hr=hour();
  mn=minute();
  sc=second();

  angleMode(DEGREES);
  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  translate(width/2,height/2);
  rotate(hrAngle);
  stroke("Green");
  strokeWeight(10);
  line(0,0,50,50);
  pop();

  push();
  translate(width/2,height/2);
  rotate(mnAngle);
  stroke("Red");
  strokeWeight(10);
  line(0,0,75,75);
  pop();

  push();
  translate(width/2,height/2);
  rotate(scAngle);
  stroke("Blue");
  strokeWeight(10);
  line(0,0,100,100);
  pop();

  push();
  translate(width/2,height/2);
  noFill();
  stroke("blue");
  strokeWeight(10);
  arc(0,0,370,370,0,scAngle);
  pop();

  push();
  translate(width/2,height/2);
  noFill();
  stroke("red");
  strokeWeight(10);
  arc(0,0,350,350,0,mnAngle);
  pop();

  push();
  translate(width/2,height/2);
  noFill();
  stroke("green");
  strokeWeight(10);
  arc(0,0,330,330,0,hrAngle);
  pop();

  drawSprites();
}