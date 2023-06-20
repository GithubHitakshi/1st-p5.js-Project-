function take_pic(){
    save("mypic.png");

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(800,190);
    video=createCapture(VIDEO);
    video.hide();
    
}


function draw(){
image(video,0,0,640,480);
fill(255, 204, 0);
circle(30, 30, 20);
fill(255,0,0);
rect(50, 20, 20,20);
fill(255,0,0);
rect(570, 450, 20,20);
fill(255, 204, 0);
circle(610, 460, 20);
fill(0,200,100);
translate(570, 75);
noStroke();
for (let i = 0; i < 10; i ++) {
  ellipse(0, 30, 20, 80);
  rotate(PI/5);
}

}