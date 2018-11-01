function Game () {
  this.goodBalls = [];
  this.badBalls = [];
  this.time = 3;
  this.canvas;
  this.gameIsOver
  this.score = 0;
}

Game.prototype.start = function() {

  this.gameScreen = buildDOM(`
  <main>
    <header>
      <p>Score: <span class="score"></span></p>
      <p>Time: <span class="time"></span></p>
    </header>
    <canvas></canvas>
  </main>
`);

document.body.prepend(this.gameScreen);
this.timeElement = this.gameScreen.querySelector('.time')

//this.scoreElement = this.gameScreen.querySelector('.score');
//this.scoreElement.innerText = this.score;

  this.startLoop();
  this.startTimer();
}

Game.prototype.startLoop = function() {
  //var ctx;
  var loop = function() {
    //do stuff

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

Game.prototype.setGameOverCallback = function(callback) {
  this.gameOverCallback = callback;
}

Game.prototype.finishGame = function() {
  this.gameScreen.remove();
  this.gameOverCallback();
}