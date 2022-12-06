let wt = false;
let s1 = 200;
let count = 0;
function setup() {
  createCanvas(400, 400);
  a1 = new Person(100,0);
}

function draw() {
  background(220);
  // moveMent(200,0,10);
  a1.display1(s1);
  a1.update();
  a1.dline(100,100);
  a1.pline(380,380);
  // a1.broke();
  

}

function moveMent(x,y,sp){
  for(let i=0;i<10;i++){
    rect(x,y,50,50);
    y+=sp;
    
  }

}

class Person{
  constructor(x, y){
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 10);
    this.position = createVector(x, y);
    this.maxspeed = 5;

  }


  update() {
     
    // this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    this.acceleration.mult(0);


  }

  display1(s1) {
  let s2 = s1;
  let s3 = s1;
  let s4 = s1;
  if(wt == true){
      s1 = 50;
    }    
    
  if(count >= 2&&wt == true){
      s2 = 50;
    }
  
  if(count >= 3&&wt == true){
      s3 = 50;
    }
  if(count >= 4&&wt == true){
      s4 = 50;
    }
  
  rectMode(CENTER);
  push();
  translate(this.position.x,this.position.y);
  noStroke();

  fill(40,50,90,s1);//body
  rect(0,0,70,10);
  // rect(170,260,60,60);
  fill(40,50,90,s2);//body
  rect(0,-60,70,10);
  
  fill(40,50,90,s3);//body
  rect(0,-80,70,10);
    
  fill(40,50,90,s4);//body
  rect(0,-150,70,10);
    
    
    
  pop();
    

    

  }
//   broke(){
//     if(wt == true){
//       s = 50;
      
//     }
    
    
//   }
  
  dline(a,b){
    line(a,0,b,400);
        
  }
  pline(c,d){
    line(0,c,400,d);
    
  }

}

function keyPressed(){
  if(key == 'w'){
    wt = true;
    count++;
    print(count);
  }
  
}
function keyReleased(){
  
  
}