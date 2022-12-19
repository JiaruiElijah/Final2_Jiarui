let wt = false;//键盘按键判断w the keypressed is false         
let st = false;//键盘s
let dt = false;//键盘d
let ft = false;
let jt = false;
let kt = false;
let dt2 = false;
let ft2 = false;
let jt2 = false;
let kt2 = false;
let keys = false;

let i2 = 0;//
let i3 = 0;
let i4 = -10800;


// let count = 0;//计数器
let modelX = 70;
let modelY = 20;//判定器大小 the withe rectangle 
let lineX = 380;
// let lineY = windowHeight/5;
// let timer = true;
// let good = false;//时机判断
// let perfect = false;//时机
// let m;
let ifBroke = false;//结果 //whether hit the note
let pattern = 0;
let k = 50;
let score = 0;
let sc = 0;//得分总和
let combo = 0;//combo数
let num1 = true;

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
  let shu1 = width/5;//dline 位置
  let shu2 = width/5*2;
  let shu3 = width/5*3;
  let shu4 = width/5*4;
  
  
  a1 = new Person(shu1,-900,s1,keys);
  a2 = new Person(shu1,-1700,s2,keys);
  a3 = new Person(shu1,-1900,s2,keys);
  b1 = new Person(shu2,-2000,s2,keys);
  c1 = new Person(shu3,-2020,s2,keys); 
  d1 = new Person(shu4,-2030,s2,keys);
  a4 = new Person(shu1,-2500,s2,keys);
  b2 = new Person(shu2,-2800,s2,keys);
  
  a5 = new Person(shu1,-3200,s2,keys);
  b3 = new Person(shu2,-3400,s2,keys);
  c2 = new Person(shu3,-3600,s2,keys);
  d2 = new Person(shu4,-3800,s2,keys);
  
  a6 = new Person(shu1,-5800,s2,keys);
  b4 = new Person(shu2,-5900,s2,keys);
  a7 = new Person(shu1,-6200,s2,keys);
  b5 = new Person(shu2,-6220,s2,keys);
  
  c3 = new Person(shu3,-6400,s2,keys);
  d3 = new Person(shu4,-6500,s2,keys);
  c4 = new Person(shu3,-6700,s2,keys);
  d4 = new Person(shu4,-6750,s2,keys);
  
  c5 = new Person(shu3,-7000,s2,keys);
  d5 = new Person(shu4,-7100,s2,keys);
  c6 = new Person(shu3,-7200,s2,keys);
  d6 = new Person(shu4,-7250,s2,keys);
    
  a8 = new Person(shu1,-7500,s2,keys);
  b6 = new Person(shu2,-7560,s2,keys);
  a9 = new Person(shu1,-7800,s2,keys);
  b7 = new Person(shu2,-7830,s2,keys);
  
  a10 = new Person(shu1,-5700,s2,keys);
  a11 = new Person(shu1,-5900,s2,keys);
  a12 = new Person(shu1,-6100,s2,keys);
  a13 = new Person(shu1,-6300,s2,keys);
  a14 = new Person(shu1,-6500,s2,keys);
  d7 = new Person(shu4,-5700,s2,keys);
  d8 = new Person(shu4,-5900,s2,keys);
  d9 = new Person(shu4,-6100,s2,keys);
  d10 = new Person(shu4,-6300,s2,keys);
  d11 = new Person(shu4,-6500,s2,keys);
  
  a15 = new Person(shu1,i4,s2,keys);
  a16 = new Person(shu1,i4+50,s2,keys);
  a17 = new Person(shu1,i4+100,s2,keys);
  a18 = new Person(shu1,i4+150,s2,keys);
  a19 = new Person(shu1,i4+200,s2,keys);
  b8 = new Person(shu2,i4+250,s2,keys);
  b9 = new Person(shu2,i4+300,s2,keys);
  a20 = new Person(shu1,i4+350,s2,keys);
  a21 = new Person(shu1,i4+400,s2,keys);
  a22 = new Person(shu1,i4+450,s2,keys);
  a23 = new Person(shu1,i4+500,s2,keys);
  a24 = new Person(shu1,i4+550,s2,keys);
  
  c7 = new Person(shu3,-7200,s2,keys);
  c7 = new Person(shu3,-7200,s2,keys);
  c7 = new Person(shu3,-7200,s2,keys);
  c7 = new Person(shu3,-7200,s2,keys);
  c7 = new Person(shu3,-7200,s2,keys);
  
  
  d11 = new Person(shu4,-7250,s2,keys);
  
  
  
  
  
  splatAni = loadAnimation('2.png', { frameSize: [120, 158], frames:4 });


  
}

function preload(){
  img = loadImage('Yuki.png');
  soundFormats('mp3', 'ogg');
  mySound = loadSound('雪降り、メリクリ.mp3');
  Start = loadSound('start.mp3');
  Select = loadSound('select.mp3');
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
  
  if (kb.holding('d')) {
   dt2 = true;
}
  else{
   dt2 = false;
  }
  
  if (kb.holding('f')) {
   ft2 = true;
}
  else{
   ft2 = false;
  }
  
  if (kb.holding('j')) {
   jt2 = true;
}
  else{
   jt2 = false;
  }
  
  if (kb.holding('k')) {
   kt2 = true;
}
  else{
   kt2 = false;
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
    image(img, 0, 0,width,height);
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
    image(img, 0, 0,width,height);
    fill(0,0,0,70);
    noStroke();
        rect(width/2,height/2,width,height);
    
    textSize(30);
    stroke(250,233,63);
    fill(43,234,234);
    text('FULL COMBO',width/2,height/5-50);//combo
    
    frameRate(50);
//edit notes
    
    a1.display1();
    a1.update();
    a1.dHit(score);
    a1.judge();
    
    a2.display1();
    a2.update();
    a2.dHit(score);
    a2.judge();

    a3.display1();
    a3.update();
    a3.dHit(score);
    a3.judge();
    
    a4.display1();
    a4.update();
    a4.dHit(score);
    a4.judge();
    
    b1.display1();
    b1.update();
    b1.fHit(score);
    b1.judge();
    
    b2.display1();
    b2.update();
    b2.fHit(score);
    b2.judge();
    
    c1.display1();
    c1.update();
    c1.jHit(score);
    c1.judge();
    
    d1.display1();
    d1.update();
    d1.kHit(score);
    d1.judge();
    
    a5.display2();
    a5.update();
    a5.dHit2(score);
    a5.judge2();  
    b3.display2();
    b3.update();
    b3.fHit2(score);
    b3.judge2();    
    c2.display2();
    c2.update();
    c2.jHit2(score);
    c2.judge2();
    d2.display2();
    d2.update();
    d2.kHit2(score);
    d2.judge2();
    
    a6.display1();//动次打次
    a6.update2();
    a6.dHit(score);
    a6.judge();
    b4.display1();
    b4.update2();
    b4.fHit(score);
    b4.judge();
    a7.display1();
    a7.update2();
    a7.dHit(score);
    a7.judge();
    b5.display1();
    b5.update2();
    b5.fHit(score);
    b5.judge();
    c3.display1();
    c3.update2();
    c3.jHit(score);
    c3.judge();
    d3.display1();
    d3.update2();
    d3.kHit(score);
    d3.judge();
    c4.display1();
    c4.update2();
    c4.jHit(score);
    c4.judge();
    d4.display1();
    d4.update2();
    d4.kHit(score);
    d4.judge();
    c5.display1();
    c5.update2();
    c5.jHit(score);
    c5.judge();
    d5.display1();
    d5.update2();
    d5.kHit(score);
    d5.judge();
    c6.display1();
    c6.update2();
    c6.jHit(score);
    c6.judge();
    d6.display1();
    d6.update2();
    d6.kHit(score);
    d6.judge();
    a8.display1();//动次打次
    a8.update2();
    a8.dHit(score);
    a8.judge();
    b6.display1();
    b6.update2();
    b6.fHit(score);
    b6.judge();
    a9.display1();
    a9.update2();
    a9.dHit(score);
    a9.judge();
    b7.display1();
    b7.update2();
    b7.fHit(score);
    b7.judge();
    
    a10.display1();//双边操作
    a10.update();
    a10.dHit(score);
    a10.judge();
    a11.display1();
    a11.update();
    a11.dHit(score);
    a11.judge();
    a12.display1();
    a12.update();
    a12.dHit(score);
    a12.judge();
    a13.display1();
    a13.update();
    a13.dHit(score);
    a13.judge();
    a14.display1();
    a14.update();
    a14.dHit(score);
    a14.judge();
    d7.display1();
    d7.update();
    d7.kHit(score);
    d7.judge();
    d8.display1();
    d8.update();
    d8.kHit(score);
    d8.judge();
    d9.display1();
    d9.update();
    d9.kHit(score);
    d9.judge();
    d10.display1();
    d10.update();
    d10.kHit(score);
    d10.judge();
    d11.display1();
    d11.update();
    d11.kHit(score);
    d11.judge();//第一段结束
    
    a15.display1();//第二段开始
    a15.update2();
    a15.dHit(score);
    a15.judge();
    a16.display1();
    a16.update2();
    a16.dHit(score);
    a16.judge();
    a17.display1();
    a17.update2();
    a17.dHit(score);
    a17.judge();
    a18.display1();
    a18.update2();
    a18.dHit(score);
    a18.judge();
    a19.display1();
    a19.update2();
    a19.dHit(score);
    a19.judge();
    b8.display1();
    b8.update2();
    b8.fHit(score);
    b8.judge();
    b9.display1();
    b9.update2();
    b9.fHit(score);
    b9.judge();
    a20.display1();//第二段开始
    a20.update2();
    a20.dHit(score);
    a20.judge();
    a21.display1();
    a21.update2();
    a21.dHit(score);
    a21.judge();
    a22.display1();
    a22.update2();
    a22.dHit(score);
    a22.judge();
    a23.display1();
    a23.update2();
    a23.dHit(score);
    a23.judge();
    a24.display1();
    a24.update2();
    a24.dHit(score);
    a24.judge();
    
    
    
    sc = sc+a1.dHit(score)+a2.dHit(score)+a3.dHit(score)+b1.fHit(score)+c1.jHit(score)+d1.kHit(score);
    // print(sc);
    textSize(40);
    stroke(250,233,63);
    strokeWeight(10);
    fill(43,234,234);
    text(sc, width-100, height/5);//score

    a1.dline(width/5);
    a1.dline2(width/5*2);
    a1.dline3(width/5*3);
    a1.dline4(width/5*4);
    a1.pline(height/5*4);
    // a1.broke();
    a1.pmo(width/5,height/5*4,dt);
    a1.pmo(width/5*2,height/5*4,ft);
    a1.pmo(width/5*3,height/5*4,jt);
    a1.pmo(width/5*4,height/5*4,kt);

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
  
  // if(a1.judge() == true && num1==0){
  //  combo+=1;
  //  num1+=1;
  // }
  // if(a2.judge() == true && num1 == 1 ){
  //  combo+=1;
  //  num1+=1;
  // }
  // if(a3.judge() == true && num1 == 2 ){
  //  combo+=1;
  //  num1+=1;
  // }
  // if(b1.judge() == true && num1 == 3 ){
  //  combo+=1;
  //  num1+=1;
  // }
  // if(c1.judge() == true && num1 == 4 ){
  //  combo+=1;
  //  num1+=1;
  // }
  // if(d1.judge() == true && num1 == 5 ){
  //  combo+=1;
  //  num1+=1;
  //  print(num1);
  // }
  // else{
  //  combo = 0;
  //  num1+=1;
  // }
  
  

  
}
