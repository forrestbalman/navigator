var squareCount;

var counter = 0;
var i;
var i2;
function randNum20() {
  i = i2 = Math.floor(Math.random() * (20 - 10 + 1) + 10);
}

//initial 10s countdown
var k = 15;
function initCountLoop() {
  var initId = setInterval(function () {
    document.getElementById("countdown").innerHTML = k;
    k--;
    if (k === 0) {
      setTimeout(arrowDir, 3000);
      clearInterval(initId);
    }
  }, 1000);
}

console.log(turnNumber);
function countLoop() {
  randNum20();
  var id = setInterval(function () {
    document.getElementById("countdown").innerHTML = i;
    i--;
    if (i === 0 && counter < 50) {
			arrowStyle.style.opacity = "0";
			arrowStyle.style.transition = "0.5s";
      clearInterval(id);
      counter++;
      countLoop();
      setTimeout(arrowDir, 3000);
    }
  }, 1000);
  if (counter >= 50) {
    document.getElementById("countdown").innerHTML = "";
    fadeOutFinal();
    clearInterval(id);
  }
}

//hide instructions
function hideInstructions() {
  document.getElementById("instructions").style.opacity = "0";
  document.getElementById("start").style.opacity = "0";
  document.getElementById("title").style.opacity = "0";
}

function showChoose() {
  document.getElementById("choose").style.opacity = "1";
  setTimeout(function() {
    document.getElementById("choose").style.opacity = "0";
  }, 13000);
}

//arrow direction generator
var j;
var arrowStyle = document.getElementById("arrowImg");

function randNum4() {
  j = Math.floor(Math.random() * (8 - 1 + 1) + 1);
}
function fadeArrow() {
	arrowStyle.animate([
		{
			opacity: "1"
		},
		{
			opacity: "0"
		}
		], {
		duration: 350
	});
}
function arrowDir() {
	arrowStyle.style.transition = "0.5s";
  randNum4();
	if (j === 1) {
		arrowStyle.style.trasitionDelay = "2s";
		arrowStyle.style.transform = "rotate(90deg)";
		arrowStyle.style.opacity = "1";
	}	
	if (j === 2) {
		arrowStyle.style.trasitionDelay = "2s";
		arrowStyle.style.transform = "rotate(180deg)";
		arrowStyle.style.opacity = "1";
	}	
	if (j === 3) {
		arrowStyle.style.trasitionDelay = "2s";
		arrowStyle.style.transform = "rotate(270deg)";
		arrowStyle.style.opacity = "1";
	}
	if (j === 4) {
		arrowStyle.style.trasitionDelay = "2s";
		arrowStyle.style.transform = "rotate(359deg)";
		arrowStyle.style.opacity = "1";
	}
	if (j === 5) {
		arrowStyle.style.trasitionDelay = "2s";
		arrowStyle.style.transform = "rotate(45deg)";
		arrowStyle.style.opacity = "1";
	}
	if (j === 6) {
		arrowStyle.style.trasitionDelay = "2s";
		arrowStyle.style.transform = "rotate(135deg)";
		arrowStyle.style.opacity = "1";
	}
	if (j === 7) {
		arrowStyle.style.trasitionDelay = "2s";
		arrowStyle.style.transform = "rotate(225deg)";
		arrowStyle.style.opacity = "1";
	}
	if (j === 8) {
		arrowStyle.style.trasitionDelay = "2s";
		arrowStyle.style.transform = "rotate(315deg)";
		arrowStyle.style.opacity = "1";
	}
}

var m;

function randOneHundred() {
  m = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}

function bgDecider(id) {
    id.className = "blankSquare";
}

//animation chooser
var bgNum;
var randBg;
var cId;
function bgSetter() {
  for (cId = 1; cId <= 16; cId++) {
    bgNum = `cc${cId}`;
    bgDecider(document.getElementById(bgNum));
  }
}

var blinkX1;
var blinkY1;
var blinkX2;
var blinkY2;
var blinkX3;
var blinkY3;
var blinkAngle;
var blinkDim;
var planetDim;
var cometColor;
function blinkCoordGen() {
  blinkX1 = (Math.random() * 12) - 6;
  blinkY1 = (Math.random() * 12) - 6;
  blinkX2 = (Math.random() * 12) - 6;
  blinkY2 = (Math.random() * 12) - 6;
  blinkX3 = (Math.random() * 12) - 6;
  blinkY3 = (Math.random() * 12) - 6;
  blinkAngle = Math.random() * (180 - 1) + 1;
  blinkDim = Math.random() * (30 - 20) + 20;
  planetDim = Math.random() * (10 - 8) + 8;
  cometColor = Math.random() * (359 - 1) + 1;
}

function animGen() {
  for (var animCounter = 1; animCounter <= 16; animCounter++) {
    blinkCoordGen();
    randOneHundred();
    //space
    if (m <= 28) {
      document.getElementById(`ccc${animCounter}`).style.opacity = "0";
    }
    //blinking
    if (m > 28 && m <= 40) {
      document.getElementById(`cc${animCounter}`).style.display = "flex";
      document.getElementById(`cc${animCounter}`).style.justifyContent = "center";
      document.getElementById(`cc${animCounter}`).style.alignItems = "center";
      document.styleSheets[1].insertRule(`.blinker${animCounter} { 
                                            width: ${blinkDim}px;
                                            height: ${blinkDim}px;
                                            transform: rotate(${Math.random() * (180 - 1) + 1}deg); 
                                            background-image: url(../navigator-images/star-background.jpg);
                                            filter: hue-rotate(${Math.random() * (359 - 1) + 1}deg) brightness(1.7); blur(3);
                                            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                                            animation-name: blinker${animCounter};
                                            animation-duration: ${Math.random() * (8 - 2) + 2}s;
                                            animation-iteration-count: infinite;
                                            animation-timing-function: linear;
                                          }`);
      document.styleSheets[1].insertRule(`@keyframes blinker${animCounter} {
                                            0%{
                                              transform: scale(1) translateX(${blinkX1}vw) translateY(${blinkY1}vh) rotate(${blinkAngle}deg);
                                              opacity: 1;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            19%{
                                              transform: scale(1) translateX(${blinkX1}vw) translateY(${blinkY1}vh) rotate(${blinkAngle}deg);
                                              opacity: 0;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            20%{
                                              transform: scale(1) translateX(${blinkX1}vw) translateY(${blinkY1}vh) rotate(${blinkAngle}deg);
                                              opacity: 0;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            39%{
                                              transform: scale(1) translateX(${blinkX2}vw) translateY(${blinkY2}vh) rotate(${blinkAngle}deg);
                                              opacity: 0;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            40%{
                                              transform: scale(1) translateX(${blinkX2}vw) translateY(${blinkY2}vh) rotate(${blinkAngle}deg);
                                              opacity: 1;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            59%{
                                              transform: scale(1) translateX(${blinkX2}vw) translateY(${blinkY2}vh) rotate(${blinkAngle}deg);
                                              opacity: 0;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            60%{
                                              transform: scale(1) translateX(${blinkX2}vw) translateY(${blinkY2}vh) rotate(${blinkAngle}deg);
                                              opacity: 0;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            79%{
                                              transform: scale(1) translateX(${blinkX3}vw) translateY(${blinkY3}vh) rotate(${blinkAngle}deg);
                                              opacity: 0;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            80%{
                                              transform: scale(1) translateX(${blinkX3}vw) translateY(${blinkY3}vh) rotate(${blinkAngle}deg);
                                              opacity: 1;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            99%{
                                              transform: scale(1) translateX(${blinkX3}vw) translateY(${blinkY3}vh) rotate(${blinkAngle}deg);
                                              opacity: 0;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                            100%{
                                              transform: scale(1) translateX(${blinkX1}vw) translateY(${blinkY1}vh) rotate(${blinkAngle}deg);
                                              opacity: 0;
                                              color: transparent;
                                              border: 0;
                                              box-shadow: 0;
                                              outline: 0;
                                            }
                                         }`);
      document.getElementById(`ccc${animCounter}`).className = `blinker${animCounter}`;
    }
    //blackhole
    if (m > 40 && m <= 52) {
      document.getElementById(`cc${animCounter}`).style.display = "flex";
      document.getElementById(`cc${animCounter}`).style.justifyContent = "center";
      document.getElementById(`cc${animCounter}`).style.alignItems = "center";
      document.styleSheets[1].insertRule(`.blackHole${animCounter} {
                                            background-image: url(../navigator-images/blackhole-background.jpg); 
                                            background-position: center;
                                            border-radius: 50%;
                                            animation-name: blackhole${animCounter};
                                            animation-duration: ${Math.random() * (8 - 4) + 4}s;
                                            animation-iteration-count: infinite;
                                            animation-timing-function: ease;
                                            animation-fill-mode: both;
                                            animation-direction: alternate;
                                          }`);
      document.styleSheets[1].insertRule(`@keyframes blackhole${animCounter} {
                                            0% {
                                              width: ${Math.random() * (10 - 2) + 2}vw;
                                              height: ${Math.random() * (10 - 2) + 2}vh;
                                              transform: rotate(${Math.random() * 25}deg); 
                                              filter: brightness(${Math.random() * 2});
                                            }
                                            20% {
                                              width: ${Math.random() * (10 - 2) + 2}vw;
                                              height: ${Math.random() * (10 - 2) + 2}vh;
                                              transform: rotate(${Math.random() * 25}deg); 
                                              filter: brightness(${Math.random() * 5});
                                            } 
                                            40% {
                                              width: ${Math.random() * (10 - 2) + 2}vw;
                                              height: ${Math.random() * (10 - 2) + 2}vh;
                                              transform: rotate(${Math.random() * 25}deg); 
                                              filter: brightness(${Math.random() * 2});
                                            }
                                            60% {
                                              width: ${Math.random() * (10 - 2) + 2}vw;
                                              height: ${Math.random() * (10 - 2) + 2}vh;
                                              transform: rotate(${Math.random() * 25}deg); 
                                              filter: brightness(${Math.random() * 2});
                                            }
                                            80% {
                                              width: ${Math.random() * (10 - 2) + 2}vw;
                                              height: ${Math.random() * (10 - 2) + 2}vh;
                                              transform: rotate(${Math.random() * 25}deg);   
                                              filter: brightness(${Math.random() * 2});
                                            }
                                            100% {
                                              width: ${Math.random() * (10 - 2) + 2}vw;
                                              height: ${Math.random() * (10 - 2) + 2}vh;
                                              transform: rotate(${Math.random() * 25}deg); 
                                              filter: brightness(${Math.random() * 2});
                                            }    
                                          }`);
      document.getElementById(`ccc${animCounter}`).className = `blackHole${animCounter}`;
    }
    //comet
    if(m > 52 && m <= 64) {
      document.getElementById(`cc${animCounter}`).style.display = "flex";
      document.getElementById(`cc${animCounter}`).style.justifyContent = "center";
      document.getElementById(`cc${animCounter}`).style.alignItems = "center";
      document.styleSheets[1].insertRule(`.comet${animCounter} {
                                            background-image: url(../navigator-images/planet-background.jpg);
                                            background-position: center;
                                            background-size: cover;
                                            clip-path: polygon(25% 2%, 70% 5%, 98% 31%, 96% 70%, 69% 94%, 31% 97%, 3% 70%, 3% 31%);
                                            width: ${Math.random() * (3 - 2) + 2}vw;
                                            height: ${Math.random() * (3 - 2) + 2}vw;
                                            animation: comet${animCounter} ${Math.random() * (4 - 3) + 3}s ease-out both infinite;
                                          }`);
      document.styleSheets[1].insertRule(`@keyframes comet${animCounter} {
                                            0%, 40% {
                                              transform: translateX(-150%) translateY(${Math.floor(Math.random() * 300) - 150}%) rotate(359deg);
                                              filter: hue-rotate(${cometColor}deg) blur(2px);
                                              opacity: 0;
                                            }
                                            98%, 100% {
                                              transform: translateX(150%) translateY(${Math.floor(Math.random() * 300) - 150}%) rotate(0deg);
                                              filter: hue-rotate(${cometColor}deg) blur(0);
                                              opacity: 1;
                                            }
                                          }`);  
      document.getElementById(`ccc${animCounter}`).className = `comet${animCounter}`;
    }
    //planet
    if (m > 64 && m <= 76) {
      document.getElementById(`cc${animCounter}`).style.display = "flex";
      document.getElementById(`cc${animCounter}`).style.justifyContent = "center";
      document.getElementById(`cc${animCounter}`).style.alignItems = "center";
      document.styleSheets[1].insertRule(`.planet${animCounter} {
                                            width: ${planetDim}vh; 
                                            height: ${planetDim}vh; 
                                            background-image: url(../navigator-images/planet-background.jpg);
                                            background-position: center;
                                            background-size: cover;
                                            filter: hue-rotate(${Math.random() * (359 - 1) + 1}deg);
                                            border-radius: ${Math.random() * (55 - 45) + 45}% ${Math.random() * (55 - 45) + 45}% ${Math.random() * (55 - 45) + 45}% ${Math.random() * (55 - 45) + 45}%; 
                                            animation-name: planet${animCounter};
                                            animation-duration: ${Math.random() * (5 - 2) + 2}s;
                                            animation-iteration-count: infinite;
                                            animation-timing-function: linear;
                                          }`);
      document.styleSheets[1].insertRule(`@keyframes planet${animCounter} {
                                            from {
                                              transform: scale(1.5) rotate(0deg);
                                            }
                                            to {
                                              transform: scale(1.5) rotate(359deg);
                                            }
                                          }`);
      document.getElementById(`ccc${animCounter}`).className = `planet${animCounter}`;
      }
    //nebula
    if (m > 76 && m <= 88) {
      document.getElementById(`cc${animCounter}`).style.display = "flex";
      document.getElementById(`cc${animCounter}`).style.justifyContent = "center";
      document.getElementById(`cc${animCounter}`).style.alignItems = "center";
      document.styleSheets[1].insertRule(`.nebula${animCounter} {
                                            width: 90%;
                                            height: 90%:
                                            transform-origin: center;
                                            mix-blend-mode: color-burn;
                                            content: url(../navigator-images/nebula.png);
                                            animation-name: nebula${animCounter};
                                            animation-duration: ${Math.random() * (5.6 - 3.3) + 3.3}s;
                                            animation-iteration-count: infinite;
                                            animation-timing-function: linear;
                                            animation-fill-mode: both;
                                            animation-direction: alternate;
                                          }`);
      document.styleSheets[1].insertRule(`@keyframes nebula${animCounter} {
                                            0% {
                                              transform: translate(0);
                                              filter: brightness(${Math.random() * (1.7 - 0.5) + 0.5});
                                            }
                                            20% {
                                              transform: translate(-2px, 2px);
                                              filter: brightness(${Math.random() * (1.7 - 0.5) + 0.5});
                                            }
                                            40% {
                                              transform: translate(-2px, -2px);
                                              filter: brightness(${Math.random() * (1.7 - 0.5) + 0.5});
                                            }
                                            60% {
                                              transform: translate(2px, 2px);
                                              filter: brightness(${Math.random() * (1.7 - 0.5) + 0.5});
                                            }
                                            80% {
                                              transform: translate(2px, -2px);
                                              filter: brightness(${Math.random() * (1.7 - 0.5) + 0.5});
                                            }
                                            100% {
                                              transform: translate(0);
                                              filter: brightness(${Math.random() * (1.7 - 0.5) + 0.5});
                                            }
                                          }`);
      document.getElementById(`ccc${animCounter}`).className = `nebula${animCounter}`;
    }
    //supernova
    if (m > 88 && m <= 100) {
      document.getElementById(`cc${animCounter}`).style.display = "flex";
      document.getElementById(`cc${animCounter}`).style.justifyContent = "center";
      document.getElementById(`cc${animCounter}`).style.alignItems = "center";
      document.styleSheets[1].insertRule(`.supernova${animCounter} {
                                            mix-blend-mode: color-dodge;
                                            content: url(../navigator-images/supernova.png);
                                            animation: supernova${animCounter} ${Math.random() * (4.5 - 2) + 2}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both infinite;
                                          }`);
      document.styleSheets[1].insertRule(`@keyframes supernova${animCounter} {
                                            0% {
                                              transform: scale(0);
                                              opacity: 1;
                                              filter: brightness(1.7) grayscale(80%) hue-rotate(${Math.random() * (359 - 1) + 1}deg);
                                            }
                                            10%{
                                              transform: scale(0.3);
                                              opacity: 1;
                                              filter: brightness(1.3) grayscale(40%) hue-rotate(${Math.random() * (359 - 1) + 1}deg);
                                            }
                                            100% {
                                              transform: scale(0.4);
                                              opacity: 0;
                                              filter: brightness(0.2) grayscale(80%) hue-rotate(${Math.random() * (359 - 1) + 1}deg)
                                            }
                                          }`);
      document.getElementById(`ccc${animCounter}`).className = `supernova${animCounter}`;                             
    }
  }
};

var grid = document.getElementById("grid-container");
var endText = document.getElementById("endingCreditsText");
function fadeOutFinal() {
  setTimeout(function() {
    grid.className += " fade-out-final";
    endText.className += "credits-fade";
  }, 4000);
}

