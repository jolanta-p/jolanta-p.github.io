const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 720;



let score = 0;

const keys = [];

const human = {
    x: 0,
    y: 330,
    width: 134,
    height: 200,
    frameX: 0,
    frameY: 0,
    speed: 7,
    moving: false
};
const virus = {
    x: 750,
    y: 330,
    width: 134,
    height: 200,
    frameX: 6,
    frameY: 1,
    speed: 7,
    moving: false
};

const humanSprite = new Image();
humanSprite.src = './img/human_walk.png';

const virusSprite = new Image();
virusSprite.src = './img/virus_walk.png';

const background = new Image();
background.src = "./img/gamebackground1.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(humanSprite, human.width * human.frameX, human.height * human.frameY, human.width, human.height, human.x, human.y, human.width, human.height);
    drawSprite(virusSprite, virus.width * virus.frameX, virus.height * virus.frameY, virus.width, virus.height, virus.x, virus.y, virus.width, virus.height);
    moveHuman();

    moveVirus();
    handleHumanFrame();
    handleVirusFrame();
    scoreDisplay();
    requestAnimationFrame(animate);

}
animate();




window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
    human.moving = true;
    virus.moving = true;
});

window.addEventListener("keyup", function(e) {
    delete keys[e.keyCode];
    human.moving = false;
    virus.moving = false;
});

function moveHuman() {
    // if (keys[38] && human.y > 10) {
    //     human.y -= human.speed;
    //     human.moving = true;
    // }
    if (keys[65] && human.x > 0) {
        human.x -= human.speed;
        human.frameY = 1;
        human.moving = true;
    }
    // if (keys[40] && human.y < canvas.height - human.height) {
    //     human.y += human.speed;
    //     human.frameY = 1;
    //     human.moving = true;
    // }
    if (keys[68] && human.x < canvas.width - human.width) {
        human.x += human.speed;
        human.frameY = 0;
        human.moving = true;
    }
}

function handleHumanFrame() {
    if (human.frameX < 6 && human.moving) human.frameX++
        else human.frameX = 0;
}

function moveVirus() {

    if (keys[37] && virus.x > 0) {
        virus.x -= virus.speed;
        virus.frameY = 1;
        virus.moving = true;
    }

    if (keys[39] && virus.x < canvas.width - virus.width) {
        virus.x += virus.speed;
        virus.frameY = 0;
        virus.moving = true;
    }
}

function handleVirusFrame() {
    if (virus.frameX < 6 && virus.moving) virus.frameX++
        else virus.frameX = 0;
}

function scoreDisplay() {
    ctx.fillStyle = "#fff";
    ctx.font = "24px Poppins";
    ctx.fillText("Score", 420, 25);
    ctx.font = "60px Poppins";
    ctx.fillText(score, 435, 85);

}

function drawHealthbar() {
    var width = 100;
    var height = 20;
    var max = 100;
    var val = 10;

    // Draw the background
    context.fillStyle = "#000000";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, width, height);

    // Draw the fill
    context.fillStyle = "#00FF00";
    var fillVal = Math.min(Math.max(val / max, 0), 1);
    context.fillRect(0, 0, fillVal * width, height);
}

drawHealthbar();