console.log("butty");

var movePixels = 10;
var delayMs = 100;
var catTimer = null;
var catWalking = false; // This is used to allow the stop button to work correctly

function catWalk() {
  var img = document.getElementById('cat');
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
    if (currentLeft > (window.innerWidth - img.width)) {
        img.style.transform = "scaleX(-1)";
        img.style.transform = "roatate(0deg)";
        movePixels = -10;
    } else if (currentLeft < 0) { // I use 0 to turn the cat around
        img.style.transform = "scaleX(1)";
        img.style.transform = "rotate(180deg)";
        movePixels = 10;
    }
}

function startCatWalk() {
  if (catWalking === false) {
      catWalking = true;
      catTimer = setInterval(catWalk, delayMs);
  } 
}

var speedCatWalk = function() {
  if (catWalking === true) {
    stopCatWalk();
    delayMs = delayMs - 5;
    startCatWalk();
  }
}

var stopCatWalk = function() {
  clearInterval(catTimer);
  catWalking = false;
}

var startButton = document.getElementById("start-button");
var speedButton = document.getElementById("speed-button");
var stopButton = document.getElementById("stop-button");

startButton.addEventListener("click", startCatWalk);
speedButton.addEventListener("click", speedCatWalk);
stopButton.addEventListener("click", stopCatWalk);


