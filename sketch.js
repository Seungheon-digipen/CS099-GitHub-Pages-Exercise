// Seungheon Jeon(전승헌)
// Draw A Dog Exercise
// CS099
// Spring 2020

function setup() {
  createCanvas(400, 400);
noStroke()
}

function draw() {
background('#fdfdfc');

  
push()
fill('#d27748')
ellipse(200, 200, 300, 250)
strokeCap(ROUND)
triangle(80, 130, 180, 80, 120, 20)
triangle(90, 130, 170, 80, 120, 20)
triangle(320, 130, 220, 80, 280, 20)
fill(255, 255, 200)
ellipse(200, 260, 200, 100)
pop()
  
push()
  fill('#ea986e')
  triangle(110, 100, 160, 80, 125, 50)
  triangle(290, 100, 240, 80, 275, 50)
pop()
  
  
fill('black')
ellipse(200, 230, 30, 20)
fill('white')
circle(203, 230, 8)
  

push()
strokeWeight(5)
stroke('black')
noFill()
arc(185, 235, 30, 30, 0,PI)
arc(215, 235, 30, 30, 0,PI)
pop()

push()
fill('black')
circle(150, 160, 30)
circle(250, 160, 30)
fill('white')
circle(155, 158, 10)
circle(255, 158, 10)
pop()
  
push()
strokeWeight(20)
stroke(255, 255, 200, 100)
  strokeJoin(ROUND)
line(130, 120, 150, 120)
line(150, 120, 160, 130)
line(270, 120, 250, 120)
line(250, 120, 240, 130)
pop()
  
  
  
  
  
  
  
}