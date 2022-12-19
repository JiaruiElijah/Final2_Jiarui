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
let i4 = -10200;


// let count = 0;//计数器
let modelX = 70;
let modelY = 20;//判定器大小 the withe rectangle 
let lineX = 380;
let ifBroke = false;//结果 //whether hit the note
let pattern = 0;
let k = 50;
let score = 0;
let sc = 0;//得分总和
let combo = 0;//combo数
let num1 = true;
let pic = true;

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
  d4 = new Person(shu4,-6720,s2,keys);
  
  c5 = new Person(shu3,-7000,s2,keys);
  d5 = new Person(shu4,-7100,s2,keys);
  c6 = new Person(shu3,-7200,s2,keys);
  d6 = new Person(shu4,-7250,s2,keys);
    
  a8 = new Person(shu1,-7500,s2,keys);
  b6 = new Person(shu2,-7560,s2,keys);
  a9 = new Person(shu1,-7800,s2,keys);
  b7 = new Person(shu2,-7820,s2,keys);
  
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
  
  
  //圈圈
  a15 = new Person(shu1,i4,s2,keys);
  a16 = new Person(shu1,i4-50,s2,keys);
  a17 = new Person(shu1,i4-100,s2,keys);
  a18 = new Person(shu1,i4-150,s2,keys);
  a19 = new Person(shu1,i4-200,s2,keys);
  b8 = new Person(shu2,i4-400,s2,keys);
  b9 = new Person(shu2,i4-450,s2,keys);
  a20 = new Person(shu1,i4-600,s2,keys);
  a21 = new Person(shu1,i4-650,s2,keys);
  a22 = new Person(shu1,i4-700,s2,keys);
  a23 = new Person(shu1,i4-750,s2,keys);
  a24 = new Person(shu1,i4-800,s2,keys);
  
  
  //圈圈
  d12 = new Person(shu4,i4-1050,s2,keys);
  d13 = new Person(shu4,i4-1100,s2,keys);
  d14 = new Person(shu4,i4-1150,s2,keys);
  d15 = new Person(shu4,i4-1200,s2,keys);
  d16 = new Person(shu4,i4-1250,s2,keys);
  c7 = new Person(shu3,i4-1400,s2,keys);
  c8 = new Person(shu3,i4-1450,s2,keys);
  d17 = new Person(shu4,i4-1600,s2,keys);
  d18 = new Person(shu4,i4-1650,s2,keys);
  d19 = new Person(shu4,i4-1700,s2,keys);
  d20 = new Person(shu4,i4-1750,s2,keys);
  d21 = new Person(shu4,i4-1800,s2,keys);
  
  //三段式
  a25 = new Person(shu1,i4-2050,s2,keys);
  b10 = new Person(shu2,i4-2250,s2,keys);
  c9 = new Person(shu3,i4-2450,s2,keys);
  d22 = new Person(shu4,i4-2650,s2,keys);
  a26 = new Person(shu1,i4-2850,s2,keys);
  b11 = new Person(shu2,i4-3050,s2,keys);
  
  
  //End
  b12 = new Person(shu2,i4-3250,s2,keys);
  
  a27 = new Person(shu1,-250,s2,keys);
  a28 = new Person(shu1,-350,s2,keys);
  a29 = new Person(shu1,-450,s2,keys);
  
  a30 = new Person(shu1,-650,s2,keys);
  a31 = new Person(shu1,-750,s2,keys);
  a32 = new Person(shu1,-850,s2,keys);
  
  a33 = new Person(shu1,-1050,s2,keys);
  b13 = new Person(shu2,-1100,s2,keys);
  c10 = new Person(shu3,-1200,s2,keys);
  d23 = new Person(shu4,-1300,s2,keys);
  
  a34 = new Person(shu1,-1400,s2,keys);
  
  a35 = new Person(shu1,-3300,s2,keys);
  b14 = new Person(shu2,-3350,s2,keys);
  c11 = new Person(shu3,-3400,s2,keys);
  d24 = new Person(shu4,-3450,s2,keys);
  
  
  
  
  splatAni = loadAnimation('2.png', { frameSize: [120, 158], frames:4 });


        
}

function preload(){
  img = loadImage('Yuki.png');
  img2 = loadImage('233.png');
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
      i2 = 0;
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
      text('A music game,please turn on your volume', width / 2, height / 2+50);
      textSize(25);
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
    
    noStroke();
    fill(255);
    textSize(20);
    text('雪降り、メリクリ',100,50);
    text('Press space to start',100,70);
    text('N/A',100,150);
    text('To be continue',100,190);
    
    stroke(0);
    text('From left to right, use keyboard "d" "f" "j" "k" to control four lines to hit the square.',800,height-100);
    text('When the falling note is going through the white boxs, use the keyboard to hit them!',500,height-150);
    text('Most notes are arranged with the rhythm of the music, follow the music then you will not miss them ',700,height-50);
    text('Press to hit the short note, Hold to hit the long note',700,height-30);
    if(st == true){
      i2=100;
    }
    if(wt ==true){
      i2=0;
    }
    
    
    
    
  }
  
  if (pattern==2){
    i2 =2;
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
    
    
    d12.display1();
    d12.update2();
    d12.kHit(score);
    d12.judge();
    d13.display1();
    d13.update2();
    d13.kHit(score);
    d13.judge();
    d14.display1();
    d14.update2();
    d14.kHit(score);
    d14.judge();
    d15.display1();
    d15.update2();
    d15.kHit(score);
    d15.judge();
    d16.display1();
    d16.update2();
    d16.kHit(score);
    d16.judge();
    c7.display1();
    c7.update2();
    c7.jHit(score);
    c7.judge();
    c8.display1();
    c8.update2();
    c8.jHit(score);
    c8.judge();
    d17.display1();
    d17.update2();
    d17.kHit(score);
    d17.judge();
    d18.display1();
    d18.update2();
    d18.kHit(score);
    d18.judge();
    d19.display1();
    d19.update2();
    d19.kHit(score);
    d19.judge();
    d20.display1();
    d20.update2();
    d20.kHit(score);
    d20.judge();
    d21.display1();
    d21.update2();
    d21.kHit(score);
    d21.judge();
    
    
    a25.display2();
    a25.update2();
    a25.dHit2(score);
    a25.judge2(); 
    b10.display2();
    b10.update2();
    b10.fHit2(score);
    b10.judge2();   
    c9.display2();
    c9.update2();
    c9.jHit2(score);
    c9.judge2();
    d22.display2();
    d22.update2();
    d22.kHit2(score);
    d22.judge2();
    a26.display2();
    a26.update2();
    a26.dHit2(score);
    a26.judge2(); 
    b11.display2();
    b11.update2();
    b11.fHit2(score);
    b11.judge2(); 
    
    b12.display3();// The end
    b12.update2();
    b12.fHit2(score);
    b12.judge2();
    b12.judgeEx();
    
    if(b12.judgeEx()){
      pattern=3;
    }
    
    
    
    
    sc = sc+a1.dHit(score)+a2.dHit(score)+a3.dHit(score)+a4.dHit(score)+a5.dHit2(score)+a6.dHit(score)+a7.dHit(score)+a8.dHit(score)+a9.dHit(score)+a10.dHit(score)+a11.dHit(score)+
      a12.dHit(score)+a13.dHit(score)+a14.dHit(score)+a15.dHit(score)+a16.dHit(score)+a17.dHit(score)+a18.dHit(score)+
      a19.dHit(score)+a20.dHit(score)+a21.dHit(score)+a22.dHit(score)+a23.dHit(score)+a24.dHit(score)+a25.dHit2(score)+a26.dHit(score)+a27.dHit(score)+a28.dHit(score)+
    a29.dHit(score)+a30.dHit(score)+a31.dHit(score)+a32.dHit(score)+a33.dHit(score)+a34.dHit(score)+a35.dHit(score)+b1.fHit(score)+
      b2.fHit(score)+b3.fHit2(score)+b4.fHit(score)+b5.fHit(score)+b6.fHit(score)+b7.fHit(score)+b8.fHit(score)+b9.fHit(score)+b10.fHit2(score)+
    b11.fHit2(score)+b12.fHit2(score)+b13.fHit(score)+b14.fHit(score)+c1.jHit(score)+c2.jHit2(score)+c3.jHit(score)+c4.jHit(score)+c5.jHit(score)+c6.jHit(score)+c7.jHit(score)+
      +c8.jHit(score)+c9.jHit2(score)+c10.jHit(score)+c11.jHit(score)+d1.kHit(score)+d2.kHit2(score)+d3.kHit(score)+d4.kHit(score)+d5.kHit(score)
    +d6.kHit(score)+d7.kHit(score)+d8.kHit(score)+d9.kHit(score)+d10.kHit(score)+d11.kHit(score)+d12.kHit(score)+d13.kHit(score)+d14.kHit(score)
    +d15.kHit(score)+d16.kHit(score)+d17.kHit(score)+d18.kHit(score)+d19.kHit(score)+d20.kHit(score)+d21.kHit(score)+d22.kHit2(score)+d23.kHit(score);
    +d24.kHit(score)// print(sc);
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

    

  }
  
  if(pattern == 3){
    i2 = 0;
    if(pic){
      mySound.jump(145,18);
      pic = false;
    }
      image(img2, 0, 0,width,height);
      textSize(40);
      stroke(250,233,63);
      strokeWeight(10);
      fill(43,234,234);
      sc= sc + a27.dHit(score)+a28.dHit(score)+a29.dHit(score)+a30.dHit(score)+a31.dHit(score)+a32.dHit(score)+a33.dHit(score)
    +a34.dHit(score)+a35.dHit(score)+b13.fHit(score)+b14.fHit(score)+c10.jHit(score);+c11.jHit(score)+d23.kHit(score)+d24 .kHit(score);;
      text(sc, width-100, height/5);//score
      a1.dline(width/5);
      a1.dline2(width/5*2);
      a1.dline3(width/5*3);
      a1.dline4(width/5*4);
      a1.pline(height/5*4);
      fill(0,0,0,70);
      textSize(30);
      stroke(250,233,63);
      fill(43,234,234);
      text('Merry Christmas',width/2,height/5);
    
      a27.display1();
      a27.update();
      a27.dHit(score);
      a27.judge();
    
      a28.display1();
      a28.update();
      a28.dHit(score);
      a28.judge();
    
      a29.display1();
      a29.update();
      a29.dHit(score);
      a29.judge();
    
      a30.display1();
      a30.update();
      a30.dHit(score);
      a30.judge();
      
      b13.display1();
      b13.update();
      b13.fHit(score);
      b13.judge();

      c10.display1();
      c10.update();
      c10.jHit(score);
      c10.judge();

      d23.display1();
      d23.update();
      d23.kHit(score);
      d23.judge();

      a31.display1();
      a31.update();
      a31.dHit(score);
      a31.judge();
      a32.display1();
      a32.update();
      a32.dHit(score);
      a32.judge();
      a33.display1();
      a33.update();
      a33.dHit(score);
      a33.judge();
      a34.display1();
      a34.update();
      a34.dHit(score);
      a34.judge();
    
    
      a35.display1();
      a35.update();
      a35.dHit(score);
      a35.judge();
    
      b14.display1();
      b14.update();
      b14.fHit(score);
      b14.judge();

      c11.display1();
      c11.update();
      c11.jHit(score);
      c11.judge();

      d24.display1();
      d24.update();
      d24.kHit(score);
      d24.judge();
    
    if(d24.judgeEx()){
      stroke(0);
      text('Press space to check your score!',width/2,height/5*4);
    }
  }
  
  if(pattern == 4){
    image(img,0,0,width,height);
    rectMode(CORNER);
    fill(0);
    rect(0,0,width/2+50,height,40);
    fill(250,91,72);
    textSize(30);
    text('Your score is',300,height/5);
    text(sc,500,height/5);
    text('Try to get Full Combo and higher score!',300,height/5+100);
    text('Refresh the page to play again',300,height/5+200);
    fill(17,246,182);
    textSize(35);
    text('Thank you for playing, happy Christmas!',350,height/5+300);
    i2 = 1;
    
    
    
    // rectMode(CENTER);  
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
    if(i2 == 1){
      pattern = 0;
    }
    if(pattern == 0){
      Start.loop();
    }
    if(pattern == 1){
      Start.pause();
      Select.loop();
      Select.jump(6, 168);
    }
    if(pattern == 2){
      Select.pause();
      mySound.play();
    }
    if(pattern == 3){
      // mySound.pause();

    }
  }

  
  

  
}
