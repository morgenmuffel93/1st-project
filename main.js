'use strict'

function buildDOM(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var splashScreen;
  var gameScreen;
  var gameOverScreen;
  var startButton;
  var restartButton;
  
  function buildSplash() {
    splashScreen = buildDOM(`
      <main>
        <h1>Cutting board</h1>
        <button>Start</button>
      </main>
    `)

    document.body.prepend(splashScreen);

    startButton = document.querySelector('button');

    startButton.addEventListener('click', destroySplash);
  }

  function destroySplash() {
    splashScreen.remove();
    startButton.removeEventListener('click', destroySplash);
    buildGameScreen();
  }

  function buildGameScreen() {

    var game = new Game();
    game.start();
    game.setGameOverCallback(destroyGameScreen);

  }

  function destroyGameScreen() {
    buildGameOverScreen();
  }

  function buildGameOverScreen() {
    gameOverScreen = buildDOM(`
      <main>
        <h1>Game Over</h1>
        <p>You've scored <span class="score"></span></p>
        <button>Restart</button>
      </main>  
    `);

    document.body.prepend(gameOverScreen);
    //scoreElement = document.querySelector('.score');
    //scoreElement.innerText = game.score;
    restartButton = document.querySelector('button');
    restartButton.addEventListener('click', destroyGameOverScreen)

  }

  function destroyGameOverScreen() {
    gameOverScreen.remove();
    restartButton.removeEventListener('click', destroyGameOverScreen)
    buildGameScreen();
  }

  buildSplash();

}

window.addEventListener('load', main);