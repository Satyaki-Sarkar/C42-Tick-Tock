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

  writtenTime();

  push();
  translate(width/2,height/2);
  rotate(hrAngle);
  stroke("Green");
  strokeWeight(10);
  line(0,0,0,-50);
  pop();

  push();
  translate(width/2,height/2);
  rotate(mnAngle);
  stroke("Red");
  strokeWeight(10);
  line(0,0,0,-75);
  pop();

  push();
  translate(width/2,height/2);
  rotate(scAngle);
  stroke("Blue");
  strokeWeight(10);
  line(0,0,0,-100);
  pop();

  push();
  translate(width/2,height/2);
  noFill();
  stroke("blue");
  strokeWeight(10);
  arc(0,0,370,-370,-90,scAngle-90);
  pop();

  push();
  translate(width/2,height/2);
  noFill();
  stroke("red");
  strokeWeight(10);
  arc(0,0,350,-350,-90,mnAngle-90);
  pop();

  push();
  translate(width/2,height/2);
  noFill();
  stroke("green");
  strokeWeight(10);
  arc(0,0,330,-330,-90,hrAngle-90);
  pop();

  drawSprites();
}

function writtenTime(){
  push();
  strokeWeight(20);
  fill(255);
  textSize(40);
  if(hr<12){
    if(hr%12<10){
      if(mn<10){
        if(sc<10){
          text("0"+hr%12+":0"+mn+":0"+sc+" am",100,250);
        }else if(sc>=10){
          text("0"+hr%12+":0"+mn+":"+sc+" am",100,250);
        }
      }else if(mn>=10){
        if(sc<10){
          text("0"+hr%12+":"+mn+":0"+sc+" am",100,250);
        }else if(sc>=10){
          text("0"+hr%12+":"+mn+":"+sc+" am",100,250);
        }
      }
    }else if(hr%12>=10){
      if(mn<10){
        if(sc<10){
          text(hr%12+":0"+mn+":0"+sc+" am",100,250);
        }else if(sc>=10){
          text(hr%12+":0"+mn+":"+sc+" am",100,250);
        }
      }else if(mn>=10){
        if(sc<10){
          text(hr%12+":"+mn+":0"+sc+" am",100,250);
        }else if(sc>=10){
          text(hr%12+":"+mn+":"+sc+" am",100,250);
        }
      }
    }
  }else if(hr>=12){
    if(hr%12<10){
      if(mn<10){
        if(sc<10){
          text("0"+hr%12+":0"+mn+":0"+sc+" pm",100,250);
        }else if(sc>=10){
          text("0"+hr%12+":0"+mn+":"+sc+" pm",100,250);
        }
      }else if(mn>=10){
        if(sc<10){
          text("0"+hr%12+":"+mn+":0"+sc+" pm",100,250);
        }else if(sc>=10){
          text("0"+hr%12+":"+mn+":"+sc+" pm",100,250);
        }
      }
    }else if(hr%12>=10){
      if(mn<10){
        if(sc<10){
          text(hr%12+":0"+mn+":0"+sc+" pm",100,250);
        }else if(sc>=10){
          text(hr%12+":0"+mn+":"+sc+" pm",100,250);
        }
      }else if(mn>=10){
        if(sc<10){
          text(hr%12+":"+mn+":0"+sc+" pm",100,250);
        }else if(sc>=10){
          text(hr%12+":"+mn+":"+sc+" pm",100,250);
        }
      }
    }
  }
  pop();
}