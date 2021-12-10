var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");
var ballRadius = 5;
var score = 10;
var curveRadius = 30;
var centreX = canvas.width/2;
var centreY = canvas.height/2;
var x = centreX - 30;
var y = centreY - 30;
var rightPressed = false;
var leftPressed = false;

function drawBall()
{
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function draw()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawScore();
    drawBall();
    if(rightPressed)
    {
        x = x + 1;
        y = y - 1;
    }
    if(leftPressed)
    {
        x = x - 1;
        y = y + 1;
    }
    requestAnimationFrame(draw);
}
draw();