function setup() {
    createCanvas(600, 600);
    background("yellow");
  }
  
  function draw() {
    
  stroke("blue");
  fill("green");
    
    //contole.log(mouseIsPressed);
    
    if (mouseIsPressed) {
   rect(mouseX, mouseY, 20, 35); 
    }
  }