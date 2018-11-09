'use strict'

function Game () {
  this.goodBalls = [];
  this.badBalls = [];
  this.bombBalls = [];
  this.dotsArray = [];
  this.time = 30;
  this.gameIsOver = false;
  this.isPaused = false;
  this.score = 0;
  this.isDrawing = false;
  this.mousex = 0;
  this.mousey = 0;
  this.pointsSound = new Audio('./audio/ding.mp3');
  this.enemiesSound = new Audio('./audio/doh.mp3');
  this.lives=5;
  this.message='';
  this.intervalId;
  this.maxVelocity = 3;
}


Game.prototype.start = function() {
  
  this.gameScreen = buildDOM(`
  <main class="main-game">
    <header class="header-game">
      <p class="text-game">Lives: <span class="lives"></span></p>
      <p class="text-game">Score: <span class="score"></span></p>
      <p class="text-game">Time: <span class="time"></span></p>
      <img src="images/homerdrool.jpg"/>
      <span id="audio1"></span>
      <span id="audio2"></span>
    </header>
    <canvas></canvas>
  </main>
`);

  document.body.prepend(this.gameScreen);
  this.timeElement = this.gameScreen.querySelector('.time')
  this.canvasElement = document.querySelector('canvas')
  this.canvasElement.width = 800;
  this.canvasElement.height = 500;
  this.ctx = this.canvasElement.getContext('2d');
  this.scoreElement = this.gameScreen.querySelector('.score');
  this.livesElement = this.gameScreen.querySelector('.lives');
  var audio1Element = document.querySelector('#audio1');
  audio1Element.innerHTML='<audio autoplay><source src="./audio/Ding.mp3"></audio>';

  var audio2Element = document.querySelector('#audio2');
  audio2Element.innerHTML='<audio autoplay><source src="./audio/Doh.mp3"></audio>';

  this.startLoop();
  this.startTimer();

}

Game.prototype.startLoop = function() {
  this.canvasElement.addEventListener('mousemove', this.handleMouseMove.bind(this));
  window.setTimeout(this.increaseVelocity.bind(this),10000);
  window.setTimeout(this.increaseVelocity2.bind(this),20000);

    var loop = function() {
      if (Math.random() > 0.10) {
        this.updateDots(this.dotsArray);
      }
    

    this.scoreElement.innerText = this.score;
    this.livesElement.innerText = this.lives;
    


    if (this.goodBalls.length < 6) {
      this.goodBalls.push(new Ball(this.canvasElement, 'good', this.maxVelocity));
    }
  
    if (this.badBalls.length < 3) {
      this.badBalls.push(new Ball(this.canvasElement, 'bad', this.maxVelocity));
    }

    if (this.bombBalls.length < 1) {
      this.bombBalls.push(new Ball(this.canvasElement, 'bomb', this.maxVelocity));
    }

    if (this.dotsArray.length < 20) {
      this.dotsArray.push(new Line(this.canvasElement, this.mousex, this.mousey))
    }
 

    this.updateAll();
    this.clearAll();
    this.drawAll();

    if (this.lives ===  0) {
      clearInterval(this.intervalId);
      this.gameIsOver = true;
      this.finishGame();
    }

    if (this.score ===  20) {
      clearInterval(this.intervalId);
      this.gameIsOver = true;
      this.finishGameWin();
    }

    if (!this.gameIsOver) {
      requestAnimationFrame(loop);
    }

    

  }.bind(this);

    loop();
}

Game.prototype.startTimer = function() {
  
  this.timeElement.innerText = this.time;

   this.intervalId = setInterval(function() {
    this.time--;
    this.timeElement.innerText = this.time;

    if (this.time === 0) {
      clearInterval(this.intervalId);
      this.gameIsOver = true;
      this.finishGame();
    }

  }.bind(this), 1000)
}


Game.prototype.increaseVelocity = function () {
  this.message = new Message (this.canvasElement, 'Level 2');
    window.setTimeout(function() {
      this.message = null;
    }.bind(this), 1000)

  this.bombBalls.push(new Ball(this.canvasElement, 'bomb', 5));
  this.maxVelocity=5;
  this.goodBalls.forEach(function(ball) {
      ball.velX=4;
      ball.velY=4;
    })
    this.badBalls.forEach(function(ball) {
      ball.velX=4;
      ball.velY=4;
    })
    this.bombBalls.forEach(function(ball) {
      ball.velX=4;
      ball.velY=4;
    })
}

Game.prototype.increaseVelocity2 = function () {
  this.message = new Message (this.canvasElement, 'Level 3');
  window.setTimeout(function() {
        this.message = null;
    }.bind(this), 1000)

  this.maxVelocity=6;
  this.bombBalls.push(new Ball(this.canvasElement, 'bomb', 6));

  this.goodBalls.forEach(function(ball) {
      ball.velX=5;
      ball.velY=5;
    })
    this.badBalls.forEach(function(ball) {
      ball.velX=5;
      ball.velY=5;
    })
    this.bombBalls.forEach(function(ball) {
      ball.velX=5;
      ball.velY=5;
    })
}

Game.prototype.drawAll = function() {
  this.goodBalls.forEach(function(ball) {
    ball.draw();
  })
  this.badBalls.forEach(function(ball) {
    ball.draw();
  })
  this.bombBalls.forEach(function(ball) {
    ball.draw();
  })
  if (this.dotsArray.length > 0) {
    this.dotsArray.forEach(function(dot){
    dot.drawDot(dot.x,dot.y)
    })
  }

  if (this.message) {
    this.message.draw();
  }

}

Game.prototype.updateAll = function() {
  this.goodBalls.forEach(function(ball) {
    ball.update();
  })
  this.badBalls.forEach(function(ball) {
    ball.update();
  })
  this.bombBalls.forEach(function(ball) {
    ball.update();
  })

}

Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
}

Game.prototype.isCollision = function(position) {
  this.goodBalls.forEach(function(ball, index){
  var dx = position.x - ball.x;
  var dy = position.y - ball.y;
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < ball.size) {
    this.goodBalls.splice(index, 1);
    this.score++;
    this.pointsSound.play();
    this.pointsSound.volume = 0.5;
  }
  }.bind(this));

  this.badBalls.forEach(function(ball, index){
    var dx = position.x - ball.x;
    var dy = position.y - ball.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
  
    if (distance < ball.size) {
      this.badBalls.splice(index, 1);
      this.lives--;
      this.enemiesSound.play();
      this.enemiesSound.volume=0.5;
    }
    }.bind(this));

    this.bombBalls.forEach(function(ball){
      var dx = position.x - ball.x;
      var dy = position.y - ball.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
    
      if (distance < ball.size) {
        clearInterval(this.intervalId);
        this.gameIsOver = true;
        this.finishGameFlanders();
      }
      }.bind(this));

}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}


Game.prototype.handleMouseMove = function(event) {
  this.isDrawing = true;
  if (this.isDrawing) {
    var position = getMousePos(this.canvasElement, event);
    this.mousex = position.x;
    this.mousey = position.y;
    this.isCollision(position);
  }
};

Game.prototype.updateLine = function() {
    this.dotsArray = 0;
};

Game.prototype.updateDots = function(array) {
  array.splice(0, 1);
}


Game.prototype.setGameOverCallback = function(callback) {
  this.gameOverCallback = callback;
}


Game.prototype.finishGame = function() {
  this.gameScreen.remove();
  this.gameOverCallback();
}


Game.prototype.setGameFlandersCallback = function(callback) {
  this.gameFlandersCallback = callback;
}

Game.prototype.finishGameFlanders = function() {
  this.gameScreen.remove();
  this.gameFlandersCallback();
}

Game.prototype.setGameWinCallback = function(callback) {
  this.gameWinCallback = callback;
}

Game.prototype.finishGameWin = function() {
  this.gameScreen.remove();
  this.gameWinCallback();
}




