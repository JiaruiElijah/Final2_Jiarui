let s1 = 200;//音符颜色 color of the notes
let s2 = 200;
let hitNum = 0;

class Person{
  constructor(x, y, s, k){
    // this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 5);
    this.position = createVector(x, y);
    this.maxspeed = 5;
    this.u = 0;
    this.sx = s;
    this.k = k;

  }


  update() { //位置和速度变化
     
    // this.velocity.add(this.acceleration);
    // this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    // this.acceleration.mult(0);


  }//moving 

  display1() {//出现音符
    
  if(dt == true ){//按键触发动画
      animation(splatAni, this.position.x, height-height/4);
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

    

  }//drawing notes and animation
  
  

  hit(){

  if(dt == true ){//判断打击点
    if(this.position.y>lineY-modelY && this.position.y<lineY+modelY+5){
      // ifBroke = true;
      this.k = true;
    }
//     else{
//       this.sx = 20;
      
      
//     }
     
     }
  }//hit on notes
  
  judge(){

//     print(this.u);
    if (this.position.y>lineY+modelY){
      if(this.k == true){
        this.sx = 0;
        this.u +=15;
        stroke(255);
        strokeWeight(3);
        noFill();
        ellipse(this.position.x,height-height/4,this.u,this.u);

      }
      else{
        this.sx = 40;
        
      }
    }

  }
  

  pline(c){//判定缐
    strokeWeight(10);
    stroke(255);
    line(0,c,width,c);
    
  }
  dline(a){//竖线
    if(dt == true){
      stroke(0);
      strokeWeight(20);
    }
    else{
      stroke(255);
      strokeWeight(10);
    }
    line(a,0,a,height);
    
        
  }
  
  dline2(a){
    if(ft == true){
      stroke(0);
      strokeWeight(20);
    }
    else{
      stroke(255);
      strokeWeight(10);
    }
    line(a,0,a,height);
  }
  
  dline3(a){
    if(jt == true){
      stroke(0);
      strokeWeight(20);
    }
    else{
      stroke(255);
      strokeWeight(10);
    }
    line(a,0,a,height);
  }
  
  dline4(a){
    if(kt == true){
      stroke(0);
      strokeWeight(20);
    }
    else{
      stroke(255);
      strokeWeight(10);
    }
    line(a,0,a,height);
  }

  
  pmo(a,c){//生成判定器
    if(dt == true){
      stroke(0);
    }
    else{
      stroke(255);
    }
    rect(a,c,modelX,modelY);
    
  }

}
class Person2{
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
//     else{
//       this.sx = 20;
      
      
//     }
     
     }
  }
    
  

  
  dline(a){//竖线
    line(a,0,a,400);
        
  }
  pline(c){//判定缐
    line(0,c,400,c);
    
  }
  
  pmo(a,c){//生成判定器
    rect(a,c,modelX,modelY);
    
  }

}