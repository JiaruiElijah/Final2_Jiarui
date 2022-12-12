let wt = false;//键盘按键判断          
let s1 = 200;//音符颜色
let s2 = 200;
let count = 0;//计数器
let modelX = 70;
let modelY = 20;//判定器大小
let lineX = 380;
let lineY = 380;
let timer = true;
let good = false;//时机判断
let perfect = false;//时机
let sm;
let ifBroke = false;//结果
let num = 0;
let b1 = 380;


function setup() {
  createCanvas(windowWidth, windowHeight);
  a1 = new Person(100,0,s1);
  a2 = new Person(100,-200,s2)
  
  splatAni = loadAnimation('2.png', { frameSize: [120, 158], frames:4 });
  
}


function draw() {
  background(220);
  // moveMent(200,0,10);
  a1.display1();
  a1.update();
  a1.hit();
  a2.display1();
  a2.update();
  a2.hit();
  
  
  
  a1.dline(100,100);
  a1.pline(lineX,lineY);
  // a1.broke();
  a1.pmo(100,lineX,lineY);
  
  sm = second();



}


function moveMent(x,y,sp){
  for(let i=0;i<10;i++){
    rect(x,y,50,50);
    y+=sp;
    
  }

}

class Person{
  constructor(x, y, s){
    // this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 5);
    this.position = createVector(x, y);
    this.maxspeed = 5;
    this.sx = s;

  }


  update() { //位置和速度变化
     
    // this.velocity.add(this.acceleration);
    // this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    // this.acceleration.mult(0);


  }

  display1() {//出现音符
  // let s2 = s1;//设置音符的透明度
  // let s3 = s1;
  // let s4 = s1;
  

    
  if(wt == true ){//按键触发动画
      animation(splatAni, 100, lineY);
      // s1 = 50;
    }    
  
  rectMode(CENTER);//画音符
  push();
  translate(this.position.x,this.position.y);
  noStroke();

  let t = millis();
    
  fill(40,50,90,this.sx);//body
  rect(0,0,70,10);
    
  pop();
  // print(s1);

    

  }

  hit(){
  if(this.position.y > lineY-modelY){

    if(ifBroke == true){//被打中消失
      
      num +=1;
      if(wt == true){//爆炸
        // let a = this.position.x;
        // let b = this.position.y;
        let sprite = new Sprite(100,380,10,10);

        sprite.vel.x = 20*random(-1,1);
        sprite.vel.y = 20*random(-1,1);
//         if(abs(t-s)>1){
        
//         sprite.visible = false;
//         }
        // print(t-s);

      }
      ifBroke = false;



    }
    else{//越过判定先变浅
    if(num == 0){
      this.sx = 50;
    }
    else{
      this.sx = 0;
    }

    // print(s1);
  }
            
    
  }

    
  if(wt == true ){//判断打击点
    if(this.position.y>lineY-modelY && this.position.y<lineY+modelY+5){
      ifBroke = true;
    }
     
     }
  }
    
  

  
  dline(a,b){//竖线
    line(a,0,b,400);
        
  }
  pline(c,d){//判定缐
    line(0,c,400,d);
    
  }
  
  pmo(a,c){//生成判定器
    rect(a,c,modelX,modelY);
    
  }

}

function keyPressed(){
  if(key == 'w'){//按下按键
    wt = true;
    count++;
      
    }
    // print(sm-s);
  
  
}
function keyReleased(){//抬起按键
  wt = false;
  
  
}