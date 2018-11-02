function Game () {
  this.goodBalls = [];
  this.badBalls = [];
  this.time = 3;
  this.gameIsOver
  this.score = 0;
}

Game.prototype.start = function() {

  this.gameScreen = buildDOM(`
  <main id="main-game">
    <header id="header-game">
      <p>Score: <span class="score"></span></p>
      <p>Time: <span class="time"></span></p>
    </header>
    <canvas></canvas>
  </main>
`);

document.body.prepend(this.gameScreen);
this.timeElement = this.gameScreen.querySelector('.time')
this.canvasElement = this.gameScreen.querySelector('canvas')

//this.scoreElement = this.gameScreen.querySelector('.score');
//this.scoreElement.innerText = this.score;

  this.startLoop();
  //this.startTimer();
}

Game.prototype.startLoop = function() {

  var loop = function() {
    if (this.goodBalls.length <= 20) {
      this.goodBalls.push(new Ball(this.canvasElement));
    }
    this.drawAll();
    this.updateAll();
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

Game.prototype.drawAll = function() {
  this.goodBalls.forEach(function(ball) {
    ball.draw();
  })

}

Game.prototype.updateAll = function() {
  this.goodBalls.forEach(function(ball) {
    ball.update();
  })
}

Game.prototype.setGameOverCallback = function(callback) {
  this.gameOverCallback = callback;
}

Game.prototype.finishGame = function() {
  this.gameScreen.remove();
  this.gameOverCallback();
}