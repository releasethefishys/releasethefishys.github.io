// Where is the circle
let x, y;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height;
  setup2();
}

function draw() {
  background(200);
  
  // Draw a circle
  stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

let input, button, greeting;

function setup2() {
  // create canvas
 // createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}
