function setup() {
  createCanvas(800, 800);

  x = 0;
  yuki = new Station();
  
  frameRate(15);

  // v = new Snow(width/2, 0);
  v1 = new Snow(0, -50, 5, 5, 20);//first snow
  v2 = new Snow(100, -300, 5, 5, 20);//second snow
  v3 = new Snow(200, -400, 5, 5, 20);//third snow
  v4 = new Snow(100, -50, 7, 10, 20);//forth snow
  
  a1 = new Person(0, 160);//person


  v5 = new Snow(0, 100, 5, 10, 10);//far snow
  v6 = new Snow(0, 200, 10, 5, 10);//far snow2

  // c1 = new Backcolor();
  // c1.updateColor();
  // c1.displayColor();


}

function draw() {

  let x1 = 66-mouseX/10;
  let x2 = 71-mouseX/10;
  let x3 = 94-mouseX/10;
  if(x3 <= 50){
    x3 = 50 ;
    x2 = 20 ;
    x1 = 10 ;
  }
  background(x1,x2,x3);//background color changed with mousemoving



  let mouse = createVector(mouseX, mouseY);
  ellipse(mouse.x, mouse.y, 50, 50);//indicate the position of mouse

  scale(2);

  let x4 = 380;//big shadow on the right of screen
  let y4 = 0;
  for(j = 0;j<14;j++){
    for(i = 0;i<15;i++){
      fill(x1,x2+5,x3-10,40+mouseX/5);
      rect(x4,y4,20,20);
      x4-=20;

    }
    x4 = 400+j*20;
    y4+=20;
  }


  
  
  
  
  //start build station
  rectMode(CORNER);

  yuki.plants(170,230);
  yuki.ground();
  yuki.house(0,130);
  yuki.zhu(210,65);
  
  
  yuki.cluster5(230,265);
  yuki.cluster6(199,265);

  
  
  
  // block();//station base line
  yuki.newBlock(0);
  yuki.newBlock(100);
  yuki.newBlock(150);
  yuki.newBlock(200);
  yuki.newBlock(250);
  yuki.newBlock(300);
  
  
  fill(205-mouseX/20);
  noStroke();
  rect(0,293,400,10);//ground
  
  yuki.cluster1(20,300);
  yuki.cluster2(150,300);
  yuki.cluster1(200,300);
  yuki.cluster3(300,300);
  yuki.cluster4(100,300);

  

  
  v1.update();
  v2.update();
  v3.update();
  v4.update();
  v5.update();
  v6.update();
  v4.display();
  v5.display();
  v6.display();


  





  for(i = 0; i<5; i++){//snow display
  v1.display();
  v1.display2();
  v1.display3();
  v1.display4();

  v2.display();
  v2.display2();
  v2.display3();  
  v2.display4();

  v3.display();
  v3.display2();
  v3.display3();
  v3.display4();
  }
  
  a1.display();


//draw shadow on the sketch that changed with mousemoving
  yuki.shadow(0, 50, 235, 50, 0, 275);
  yuki.shadow(0,290,170,290,140,230);
  yuki.shadow(230,165,230,80,150,85);
  yuki.shadow2();
  
  // triangle(230,110,110,300,330,300,20);  
  yuki.shadow(0,400,400,250,400,400);

}


class Station{
  constructor(){
    // this.x = x;
    // this.y = y;

  }

  newBlock(x){ //some block near station
    fill(79,85,88);
    stroke(29,41,60);
    strokeWeight(3);
    rect(x,304,50,15);

    fill(84,96,76);
    stroke(29,41,60);
    strokeWeight(3);
    rect(x+50,304,50,15);

}
  
  ground(){
    noStroke();
    fill('rgb(24,36,54)');
    rect(0,320,400,200);//station base
    fill(27,75,88,60);
    rect(0,320,400,100);

    fill(2,90,90,70);
    rect(0,360,400,90);//shadow of the station base
  }

  zhu(x,y){
  noStroke();
  fill(79,85,88);
  rect(x,y,20,230); 
  stroke(50,66,76);
  line(x+15,y,x+15,300);
  noStroke();
  fill(97,41,25,90-mouseX/10);
  rect(x+5,205,15,20);
  fill(73,77,88);
  rect(x+10,212,5,5);
    
    
  fill(79,85,88);
  rect(0,100,400,20);//top zhu
  
  rect(0,50,400,20);
  
  fill(33,49,55);
  rect(0,60,400,10);
  rect(210,60,5,40);
}

  house(x,y){
  fill(45,63,74);
  rect(x,y,150,160);
  
  fill(34,46,64);
  rect(x,y-60,210,60);//upper
  rect(x,y+120,170,50);//lower
  
  fill(0,20,47);
  rect(x+220,y-60,210,40);
  
  fill(83,88,90);
  rect(x,y+120,170,5);//lower2
  
  fill(20,46,79);
  rect(x,y+45,30,40);//window
  
  stroke(33,45,63);
  for(let i=0;i<6;i++){
    x+=15;

    line(x+50,y+30,x+50,y+119)
    
  }
  noStroke();
  fill(34,46,64);
  rect(0,y,150,30);
  fill(45,63,74);
  rect(60,y,90,15);
  rect(50,y+13,100,10);
  

  
  
}

  shadow(a,b,c,d,e,f){
  noStroke();
  fill(0,0,0,20+mouseX/50);
  triangle(a,b,c,d,e,f);
  
}

  shadow2(){
  noStroke();
  fill(0,0,0,40);
  rect(210,150,10,140);
}

  cluster1(x, y){
  stroke(200-mouseX/20);
  fill(200-mouseX/20);
  rect(x,y,5,5);
  rect(x+5,y,10,10);
  rect(x+10,y+10,5,5);
  rect(x+10,y+15,5,5);
  
}
  cluster2(x, y){
  stroke(200-mouseX/20);
  fill(200-mouseX/20);
  rect(x,y,5,5);
  rect(x+5,y,7,7);
  rect(x+15,y,10,10);
  rect(x+10,y+10,5,5);
  rect(x+10,y+15,5,5);
  rect(x+15,y+10,5,5);
  rect(x+10,y+20,5,5);
  rect(x+10,y+25,5,5);
  
}

  cluster3(x, y){
  stroke(200-mouseX/20);
  fill(200-mouseX/20);
  rect(x,y,5,5);
  rect(x+5,y,7,7);
  rect(x+15,y,10,20);
  rect(x+25,y,10,5);
  rect(x+10,y,5,15);
  rect(x+10,y+15,5,5);
  rect(x,y+10,8,5);
  rect(x+10,y+20,5,5);
  rect(x+10,y+25,5,5);
  
}
  cluster4(x, y){
  stroke(200-mouseX/20);
  fill(200-mouseX/20);
  rect(x-5,y,15,5);
  rect(x+5,y,7,7);
  rect(x,y,10,5);
  rect(x,y+5,5,5);
  rect(x-5,y+13,5,5);

  
}
  cluster5(x, y){
  stroke(200-mouseX/20);
  fill(200-mouseX/20);
  rect(x,y,25,25,10);
  rect(x+5,y+10,27,27,10);
  rect(x-5,y+15,10,20,10);
  rect(x+25,y+15,17,17,10);
}

  cluster6(x, y){
  stroke(200-mouseX/20);
  fill(200-mouseX/20);
  rect(x+5,y+6,5,12,2);
  rect(x-5,y+18,16,10,10);
  rect(x-15,y+25,16,5,10);
  

}

  plants(x,y){
  noStroke();
  fill(255);
  // rect(0,220,400,10);
  
  fill(19-mouseX/20,58-mouseX/30,3);
  stroke(200-mouseX/20,70);
  rect(0,250,400,50);
  
  rect(250,240,30,20);
  rect(250,230,15,20);
  rect(240,240,15,20);
  rect(230,245,15,20);
  
  rect(190,245,15,20);
  rect(180,240,15,20);
  rect(175,245,15,20);
  
  rect(370,245,15,20);
  rect(350,240,15,20);
  rect(340,245,15,20);
  
  noStroke();
  rect(250,240,32,25);
  rect(250,230,17,25);
  rect(240,240,17,25);
  rect(230,245,17,25);
  
  rect(190,245,19,25);
  rect(180,240,19,25);
  rect(173,245,19,25);
  
  rect(365,245,24,25);
  rect(350,240,19,25);
  rect(335,245,22,25);



}

}



class Snow{
  
  constructor(x1, y1, sp, a, b){
    this.acceleration = createVector(-2, sp);
    this.velocity = createVector(0, 0);
    this.position = createVector(x1, y1);
    this.maxspeed = 8;
    this.a = a;
    this.b = b;
    this.x2 = x1;
    this.y2 = y1;

  }
  
  display() {
    
    noStroke();
    fill(200-mouseX/20,70);
    let w = random(this.a,this.b);
    let h = random(this.a,this.b);
    rectMode(CENTER);
    push();
    translate(this.position.x,this.position.y);
    rect(100,0,w,h);
    rect(200,40,w,h);
    rect(300,-50,w,h);
    
    pop();
    if(this.position.y>550){
      this.position.x = 0;
      this.position.y = -50;
      
    }

  }
  
    display2() {
    
    noStroke();
    fill(200-mouseX/20,70);
    let w = random(this.a,this.b);
    let h = random(this.a,this.b);
    rectMode(CENTER);
    push();
    translate(this.position.x-50,this.position.y-100);
    rect(100,0,w,h);
    rect(200,40,w,h);
    rect(300,-50,w,h);
    
    pop();
    if(this.position.y>550){
      this.position.x = 0;
      this.position.y = -50;
      
    }

  }

  display3() {
    
    noStroke();
    fill(200-mouseX/20,70);
    let w = random(this.a,this.b);
    let h = random(this.a,this.b);
    rectMode(CENTER);
    push();
    translate(this.position.x+300,this.position.y-100);
    rect(100,0,w,h);
    rect(200,40,w,h);
    rect(300,-50,w,h);
    
    pop();
    if(this.position.y>550){
      this.position.x = 0;
      this.position.y = -50;
      
    }

  }

  display4() {
    
    noStroke();
    fill(200-mouseX/20,70);
    let w = random(this.a,this.b);
    let h = random(this.a,this.b);
    rectMode(CENTER);
    push();
    translate(this.position.x+250,this.position.y-160);
    rect(100,0,w,h);
    rect(200,40,w,h);
    rect(210,-50,w,h);
    
    pop();
    if(this.position.y>550){
      this.position.x = 0;
      this.position.y = -50;
      
    }

  }
// Method to update location
  update() {
     
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    this.acceleration.mult(0);
    
    print(this.position);



  }
  


  
  
}
  
class Person{
  constructor(x, y){
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -1);
    this.position = createVector(x, y);
    this.maxspeed = 3;

  }


  update() {
     
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);

    this.position.add(this.velocity);
    this.position.y = 160 ;
    this.acceleration.mult(0);


  }

  display() {
  rectMode(CORNER);
  push();
  translate(this.position.x+100,this.position.y);
  noStroke();

  fill(21,24,58,200-mouseX/20);//body
  rect(0,70,30,45);
  // rect(170,260,60,60);
  rect(-5,90,36.5,25);
  
  
  
  
  fill(102,94,92,200-mouseX/20);//body-scarf
  rect(5,60,25,5);
  rect(0,65,30,5);
  fill(102,77,75,200-mouseX/20);
  rect(20,70,5,10);
  rect(25,75,5,17.5);
  
  
  
  fill(131,131,116,200-mouseX/20);
  rect(10,35,20,25);
  rect(5,25,26.5,15);//lian
  rect(0,35,5,15);
  rect(5,115,10,25);//leg
  rect(20,115,7.5,25);
  
  fill(164,172,189,200-mouseX/30)//sock
  rect(5,125,10,15);
  rect(20,125,7.5,15);
  
  fill(15,18,52,200-mouseX/30)//shoes
  rect(20,140,7.5,5);
  rect(5,140,10,5);
  
  
  
  
  
  
  
  fill(23,27,59,200-mouseX/30);
  rect(20,25,15,15);//hair
  rect(10,20,20,10);
  rect(5,20,10,20);
  rect(5,20,5,30);
  rect(-5,45,5,20);
  
  
  
  rect(-10,35,12.5,15);
  
  
  
  rect(30,35,5,20);
  rect(25,55,5,5);
  rect(25,60,3,5);
  
  rect(0,30,5,10);
  rect(10,50,5,10);
  
  pop();

  }

seek(target){
  let desired = target.x-250 - this.position.x;

  if(desired < 100) {
    if(desired < 50){
      this.velocity.x = 0;
    }
    let m = map(desired, 0, 100, 0, this.maxspeed);
    this.acceleration.x += m;
  } else {
    this.acceleration.x += this.maxspeed;
  }


  


}








}


// class Backcolor{


//   constructor(){
//     let hueValues = []; 
//     let saturationValues = []; 
//     let brightnessValues = [];

//   }

//   updateColor(){
//     for (var i = 0; i < 800; i++) { 
//       if (i % 2 == 0) {
//         hueValues[i] = int(random(0, 360)); 
//         saturationValues[i] = 100; 
//         brightnessValues[i] = int(random(0, 100));  } 
//       else { 
//         hueValues[i] = 195; 
//         saturationValues[i] = int(random(0, 100)); 
//         brightnessValues[i] = 100;
//       }


//       }


//   }

//   displayColor(){
//     fill(hueValues[1], saturationValues[1], brightnessValues[1]); 
//     rect(0, 0, 200, 200);




//   }

// }
