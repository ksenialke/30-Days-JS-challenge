const canvas = document.querySelector('#draw'); // getting the canvas
const context = canvas.getContext('2d'); // 2D elements, not 3D

canvas.width = window.innerWidth; // resizing
canvas.height = window.innerHeight; //resizing

context.strokeStyle = '#dfb7ff';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;
context.globalCompositeOperation = 'xor';

// draws only when a cursor is 'touching' the canvas (when we click)
let isDrawing = false;

let lastX = 0; // where we start from
let lastY = 0; // where we end
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; // stop the function when the mouse isnt drawing
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    context.moveTo(lastX,lastY);
    context.lineTo(e.offsetX,e.offsetY); // values from the event
    context.stroke(); // showing the stroke
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (context.lineWidth >= 65 || context.lineWidth <= 1){
        direction = !direction;
    }
    if(direction) {
        context.lineWidth++;
    } else{
        context.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false); // bringing the coursor outside of the window