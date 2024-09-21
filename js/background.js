// Create the canvas element
var canvas = document.createElement('canvas');
canvas.width = document.body.scrollWidth;
canvas.height = document.body.scrollHeight;
document.body.appendChild(canvas);


canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.left = '0px';
canvas.style.width = document.body.scrollWidth;
canvas.style.height = document.body.scrollHeight;
canvas.style.zIndex = -1


var ctx = canvas.getContext('2d');

// Create an array to store the circle objects
var circles = [];

function Circle(x, y, radius, grayValue) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.grayValue = grayValue;
}

function drawCanvas(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  // Update and draw each circle
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    // Update the circle's position
    circle.x += Math.random() * 2 - 1; // Move horizontally
    circle.y += Math.random() * 2 - 1; // Move vertically

    // Keep the circle within the canvas bounds
    circle.x = Math.max(0, Math.min(circle.x, canvas.width));
    circle.y = Math.max(0, Math.min(circle.y, canvas.height));

    // Draw the circle
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(${circle.grayValue}, ${circle.grayValue}, ${circle.grayValue}, 0.5)`;
    ctx.fill();
  }
}

// Initialize the circles
for (let i = 0; i < 10; i++) {
  let circleRadius = Math.random() * 50 + 10;
  let circleX = Math.random() * canvas.width;
  let circleY = Math.random() * canvas.height;
  let grayValue = Math.random() * 200;
  circles.push(new Circle(circleX, circleY, circleRadius, grayValue));
}

drawCanvas(canvas, ctx)