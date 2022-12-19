let s1 = 200;//音符颜色 color of the notes
let s2 = 250;
let hitNum = 0;

class Person{
  constructor(x, y, s, k){
    // this.acceleration = createVector(0, 0);

    this.position = createVector(x, y);
    this.u = 0;
    this.sx = s;
    this.k = k;
    this.score = 0;
    
    this.combo = 0;
    this.comb = false;
    
    this.hold = false;

  }


  update() { //位置和速度变化
    this.velocity = createVector(0, 5);
    this.position.add(this.velocity);

  }//moving 
  update2() { //位置和速度变化
    this.velocity = createVector(0, 7);
    this.position.add(this.velocity);

  }//moving 
  
  display1() {//出现音符
    
  if(dt == true ){//按键触发动画
      animation(splatAni, width/5, height/5*4);
      // print('d='+this.position.y);
    }
  if(ft == true){
    animation(splatAni, width/5*2, height/5*4);
      // print('f='+this.position.y);
  
  }
  if(jt == true){
    animation(splatAni, width/5*3, height/5*4);
    // print('j='+this.position.y);
  }
  if(kt == true){
    animation(splatAni, width/5*4, height/5*4);
    // print('k='+this.position.y);
  
  }
  
  rectMode(CENTER);//画音符
  push();
  translate(this.position.x,this.position.y);

  // stroke(220);
  noStroke();
  fill(57,250,200,this.sx);//body
  rect(0,0,80,15);
    
  pop();
  // print(s1);

    

  }//drawing notes and animation
  display2(){
    push();
    translate(this.position.x,this.position.y);

  // stroke(220);
    noStroke();
    fill(57,250,200,this.sx);//body
    rect(0,0,80,100);
    stroke(255);
    line(-40,50,40,50);
    pop();
  }
  

  dHit(s){
  this.score = s;
  if(dt == true ){//判断打击点
    if(this.position.y>height/5*4-modelY && this.position.y<height/5*4+modelY+5){
      // ifBroke = true;
      this.k = true;
      this.score+=1;
      return this.score;
    }
     
     }
    return this.score;
  }//press D hit on notes
  
  dHit2(s){
  this.score = s;
  if(dt2 == true && this.position.y+50>height/5*4-modelY){//判断打击点
    this.hold = true
    this.k = true
    if(this.hold&&this.position.y-100>height/5*4-modelY){
      // ifBroke = true;
      this.score+=1;
      this.hold = false;
      return this.score;
      
    }
     
     }
    return this.score;
  }//press D hit on notes
  
  fHit(s){
  this.score = s;
  if(ft == true ){//判断打击点
    if(this.position.y>height/5*4-modelY && this.position.y<height/5*4+modelY+5){
      // ifBroke = true;
      this.k = true;
      this.score+=1;
      return this.score;
    }
     }
    return this.score;
  }//press f hit on notes
  
  fHit2(s){
  this.score = s;
  if(ft2 == true && this.position.y+50>height/5*4-modelY){//判断打击点
    this.hold = true
    this.k = true
    if(this.hold&&this.position.y-100>height/5*4-modelY){
      // ifBroke = true;
      this.score+=1;
      this.hold = false;
      return this.score;
      
    }
     
     }
    return this.score;
  }//press f hit on notes
  
  jHit(s){
  this.score = s;
  if(jt == true ){//判断打击点
    if(this.position.y>height/5*4-modelY && this.position.y<height/5*4+modelY+5){
      // ifBroke = true;
      this.k = true;
      this.score+=1;
      return this.score;
    }
     }
    return this.score;
  }//press j hit on notes
  
  jHit2(s){
  this.score = s;
  if(jt2 == true && this.position.y+50>height/5*4-modelY){//判断打击点
    this.hold = true
    this.k = true
    if(this.hold&&this.position.y-100>height/5*4-modelY){
      // ifBroke = true;
      this.score+=1;
      this.hold = false;
      return this.score;
      
    }
     
     }
    return this.score;
  }//press D hit on notes
  
  kHit(s){
  this.score = s;
  if(kt == true ){//判断打击点
    if(this.position.y>height/5*4-modelY && this.position.y<height/5*4+modelY+5){
      // ifBroke = true;
      this.k = true;
      this.score+=1;
      return this.score;
    }
     
     }
    return this.score;
  }//press k hit on notes
  
  kHit2(s){
  this.score = s;
  if(kt2 == true && this.position.y+50>height/5*4-modelY){//判断打击点
    this.hold = true
    this.k = true
    if(this.hold&&this.position.y-100>height/5*4-modelY){
      // ifBroke = true;
      this.score+=1;
      this.hold = false;
      return this.score;
      
    }
     
     }
    return this.score;
  }//press D hit on notes
  
  judge(){
    if (this.position.y>height/5*4+modelY){
      if(this.k == true){
        this.sx = 0;
        this.u +=15;
        this.comb = true;
        
        stroke(255);
        strokeWeight(3);
        noFill();
        ellipse(this.position.x,height/5*4,this.u,this.u);
        


      }
      else{
        this.sx = 40;
        this.comb = false;
        strokeWeight(10);
        stroke(255);
        line(width/2-100,height/5-60,width/2+100,height/5-60);
        
      }
    }
    
    // text(this.combo,width/2-50,height/5-50);
    return this.comb;
    
  }
  
  judge2(){
    if (this.position.y+50>height/5*4+modelY){
      if(this.k == true){
        this.sx = 0;
        this.u +=15;
        this.comb = true;
        
        stroke(255);
        strokeWeight(3);
        noFill();
        ellipse(this.position.x,height/5*4,this.u,this.u);
        


      }
      else{
        this.sx = 40;
        this.comb = false;
        strokeWeight(10);
        stroke(255);
        line(width/2-100,height/5-60,width/2+100,height/5-60);
        
      }
    }
    
    // text(this.combo,width/2-50,height/5-50);
    return this.comb;
    
  }
  
  dScore(score){
    if(dt == true ){//判断打击点
      if(this.position.y>height/5*4-modelY && this.position.y<height/5*4+modelY+5){
        score+=1;
    }
     }
    
    
  }
  
  pline(c){//判定缐
    strokeWeight(5);
    stroke(255);
    line(0,c,width,c);
    
  }
  dline(a){//竖线
    if(dt == true){
      stroke(250,233,63);
      strokeWeight(15);
    }
    else{
      stroke(255);
      strokeWeight(5);
    }
    line(a,0,a,height);
    
        
  }
  
  dline2(a){
    if(ft == true){
      stroke(250,233,63);
      strokeWeight(15);
    }
    else{
      stroke(255);
      strokeWeight(5);
    }
    line(a,0,a,height);
  }
  
  dline3(a){
    if(jt == true){
      stroke(250,233,63);
      strokeWeight(15);
    }
    else{
      stroke(255);
      strokeWeight(5);
    }
    line(a,0,a,height);
  }
  
  dline4(a){
    if(kt == true){
      stroke(250,233,63);
      strokeWeight(15);
    }
    else{
      stroke(255);
      strokeWeight(5);
    }
    line(a,0,a,height);
  }

  
  pmo(a,c,dt){//生成判定器
    if(dt == true){
      stroke(0);
    }
    else{
      stroke(255);
    }
    fill(255);
    rect(a,c,modelX,modelY);
    
  }

}