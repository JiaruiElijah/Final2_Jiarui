let wt = false;//键盘按键判断w the keypressed is false         
let st = false;//键盘s
let dt = false;//键盘d
let ft = false;
let jt = false;
let kt = false;

let keys = false;

let i2 = 0;//
let i3 = 0;


// let count = 0;//计数器
let modelX = 70;
let modelY = 20;//判定器大小 the withe rectangle 
let lineX = 380;
let lineY = 380;
// let timer = true;
// let good = false;//时机判断
// let perfect = false;//时机
// let m;
let ifBroke = false;//结果 //whether hit the note
let pattern = 0;
let k = 50;


let sTime, theta = 0;//bubbles
let frames = 240,
    num = 200,
    num2 = 6;
let rs;


function setup() {
  Start.loop();
  createCanvas(windowWidth, windowHeight);
  smooth(8);
  rs = random(10000);
  let shu1 = width/5;
  let shu2 = width
  
  
  a1 = new Person(shu1,0,s1,keys);
  // a2 = new Person(100,-200,s2)
  a2 = new Person(shu1,-200,s2,keys);
  splatAni = loadAnimation('2.png', { frameSize: [120, 158], frames:4 });


  
}

function preload(){
  img = loadImage('Yuki.png');
  soundFormats('mp3', 'ogg');
  mySound = loadSound('雪降り、メリクリ');
  Start = loadSound('start');
  Select = loadSound('select');
}


function draw() {
  if (kb.presses('w')) {
  wt = true;
  }
  else{
    wt = false;
  }
  
  if(kb.presses('s')){
    st = true;
  }
  else{
    st = false;
  }
  
  if (kb.presses('d')) {
  dt = true;
  }
  else{
    dt = false;
  }
  
  if (kb.presses('f')) {
  ft = true;
  }
  else{
    ft = false;
  }
  
  if (kb.presses('j')) {
  jt = true;
  }
  else{
    jt = false;
  }
  
  if (kb.presses('k')) {
  kt = true;
  }
  else{
    kt = false;
  }
  
  
  
  
    // let k1 = random(10,200);
  if(pattern==0){//Start Page开始页
      background(0);
      noStroke();
      randomSeed(rs);
      sTime = (frameCount % frames) / float(frames);

      for (var i = 0; i < num; i++) {
          drawBubble(i);
      }
      theta += TWO_PI / frames;


      //Title and start
      fill(255);
      stroke(0);
      textAlign(CENTER);
      textSize(50);
      text('Phigros Beta', width / 2, height / 2);
      textSize(15);
      text('Press space to start',width/2,height-100);

    
    
  }
  
  if(pattern==1){//select page
    Start.stop();
    background(0);
    image(img, 0, 0);
    noStroke();
    fill(0,0,0,50);
    rect(0,0,205,height);
    
    fill(0);
    rect(0,0,205,100);//选择框1
    fill(0,0,0,80);
    rect(0,100,205,100);

    stroke(255);
    strokeWeight(10);
    noFill();
    rect(0,i2,200,100);
  
    if(st == true){
      i2=100;
    }
    if(wt ==true){
      i2=0;
    }
    
    
    
    
  }
  
  if (pattern>1){



    background(220);
    image(img, 0, 0);
    fill(0,0,0,70);
    noStroke();
        rect(width/2,height/2,width,height);
    frameRate(50);
    // moveMent(200,0,10);
    a1.display1();
    a1.update();
    a1.hit();
    a1.judge();
    
    a2.display1();
    a2.update();
    a2.hit();
    a2.judge();
    


    a1.dline(width/5);
    a1.dline2(width/5*2);
    a1.dline3(width/5*3);
    a1.dline4(width/5*4);
    
    a1.pline(height-height/4);
    // a1.broke();
    a1.pmo(width/5,height-height/4);

    sm = second();
  }



}


function drawBubble(i) {
    let x = random(width);
    let y = random(height);
    let sc = random(1, 3);
    let rotation = random(-0.01, 0.1);
    let m = map(sin(theta + (TWO_PI / num) * i), -1, 1, 0.5, 2);
    let sz = random(10, 30) * m;//size of circle
    
    push();
    scale(sc);
    translate(x, y);
    rotate(rotation);
    fill('rgba(52,161,250,108)');
    if (random(1) > 0.8) fill('rgba(61,0,130,51)');
    if (random(1) > 0.9) fill('rgba(0,37,224,88)');
    ellipse(0, -sTime * height + height, sz, sz);
    ellipse(0, -sTime * height, sz, sz);
    pop();
}



function keyPressed(){
  if(key == ' ' ){
    if(i2 == 0){
      pattern++;
    }
    if(pattern == 1){
      Select.loop();
      Select.jump(6, 100);
    }
    if(pattern == 2){
      Select.pause();
      mySound.play();
    }
  }

  
}
