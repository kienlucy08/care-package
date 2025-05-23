//some of this code was taken from a geeksforgeeks aritcle and some from
//my past coding in javascript (involved drawing on a canvas with other users)
// get the canvas info and set to 2d
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// set the drawing to false and fill the canvas with white
let isDrawing = false;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// set the pen color
ctx.strokeStyle = "red";

// start drawing which triggers draw
function startDrawing(event) {
  isDrawing = true;
  draw(event);
}

// draw which tracks the mouse x and y 
function draw(event) {
  if (!isDrawing) return;
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;

  ctx.lineTo(x, y);
  ctx.stroke();
}

// when drawing is not happening begin a path
function stopDrawing() {
  isDrawing = false;
  ctx.beginPath();
}

// canvas listeners for mouse movement
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// clear button that resets the canvas 
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function () {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
