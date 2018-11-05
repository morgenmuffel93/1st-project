function Game () {
  this.player = null;
  this.goodBalls = [];
  this.badBalls = [];
  this.bombBalls = [];
  this.time = 20;
  this.gameIsOver
  this.score = 0;
}


Game.prototype.start = function() {

  this.gameScreen = buildDOM(`
  <main id="main-game">
    <header id="header-game">
      <p class="text-game">Score: <span class="score"></span></p>
      <p class="text-game">Time: <span class="time"></span></p>
    </header>
    <canvas width="800px" height="500px"></canvas>
  </main>
`);

  document.body.prepend(this.gameScreen);
  this.timeElement = this.gameScreen.querySelector('.time')
  this.canvasElement = document.querySelector('canvas')
  this.ctx = this.canvasElement.getContext('2d');
  
  this.scoreElement = this.gameScreen.querySelector('.score');


  this.startLoop();
  this.startTimer();
}

Game.prototype.startLoop = function() {

  this.canvasElement.addEventListener('mousemove', this.isCollision.bind(this));
  
    var loop = function() {
    this.scoreElement.innerText = this.score;
    if (this.goodBalls.length < 10) {
      this.goodBalls.push(new Ball(this.canvasElement, 'good'));
    }
  
    if (this.badBalls.length < 5) {
      this.badBalls.push(new Ball(this.canvasElement, 'bad'));
    }

    if (this.bombBalls.length < 1) {
      this.bombBalls.push(new Ball(this.canvasElement, 'bomb'));
    }

    this.updateAll();
    this.clearAll();
    this.drawAll();

    requestAnimationFrame(loop);

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
      this.finishGame();
    }

  }.bind(this), 1000)
}

//Game.prototype.changeSpeed = function () {
  //this.goodBalls.forEach(function(ball) {
    //setTimeout(this.ball.incrementSpeed,10000);
  //}
//}



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

Game.prototype.isCollision = function(event) {
  var position = getMousePos(this.canvasElement, event);
  console.log("mouse: "+position.x, position.y);

  this.goodBalls.forEach(function(ball, index){
  console.log("ball: "+ball.x,ball.y);
  var dx = position.x - ball.x;
  var dy = position.y - ball.y;
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < ball.size) {
    this.goodBalls.splice(index, 1);
    this.score++;
  }
  }.bind(this));

  this.badBalls.forEach(function(ball, index){
    var dx = position.x - ball.x;
    var dy = position.y - ball.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
  
    if (distance < ball.size) {
      this.badBalls.splice(index, 1);
      this.score = this.score - 2;
    }
    }.bind(this));

    this.bombBalls.forEach(function(ball, index){
      var dx = position.x - ball.x;
      var dy = position.y - ball.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
    
      if (distance < ball.size) {
        this.finishGame();
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

Game.prototype.setGameOverCallback = function(callback) {
  this.gameOverCallback = callback;
}


Game.prototype.finishGame = function() {
  this.gameScreen.remove();
  this.gameOverCallback();
}

/* Game.prototype.setGameFlandersCallback = function(callback) {
  this.gameFlandersCallback = callback;
}

Game.prototype.finishGameFlanders = function() {
  this.gameScreen.remove();
  this.gameFlandersCallback();
}*/



