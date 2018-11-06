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
  var gameFlandersScreen;
  var startButton;
  var restartButton;
  var canvasElement;
  
  function buildSplash() {
    splashScreen = buildDOM(`
      <main id="main-splash">
        <h1 id="h1-splash">Homer is hungry!</h1>
        <p class="text-splash">Help him catch the foods he enjoys while avoiding healthy items...<br>...and Flanders. Stupid Flanders.</p>
        <button id="btn-splash">Start</button>
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
    game.setGameFlandersCallback(destroyGameScreen);

  }

  function destroyGameScreen() {
    buildGameOverScreen();
  }

  function destroyGameFlandersScreen() {
    buildGameFlandersScreen();
  }

  function buildGameOverScreen() {
    gameOverScreen = buildDOM(`
      <main id="main-over">
        <h1 id="h1-over">Game Over</h1>
        <p class="scored-par"><span class="score"></span></p>
        <button id="btn-over">Restart</button>
      </main>  
    `);

    document.body.prepend(gameOverScreen);

    //scoreElement = document.querySelector('.score');
    //scoreElement.innerText = game.score;
    restartButton = document.querySelector('button');
    restartButton.addEventListener('click', destroyGameOverScreen)
  }

  function buildGameFlandersScreen() {
    gameFlandersScreen = buildDOM(`
      <main id="main-flanders">
        <h1 id="h1-over">Game Over</h1>
        <p class="flanders-text">Knock knock! It's your favorite neighbour...</p>
        <button id="btn-over">Restart</button>
      </main>  
    `);

    document.body.prepend(gameFlandersScreen);

    //scoreElement = document.querySelector('.score');
    //scoreElement.innerText = game.score;
    restartButton = document.querySelector('button');
    restartButton.addEventListener('click', destroyGameFlandersScreen)
    

  }

  function destroyGameOverScreen() {
    gameOverScreen.remove();
    restartButton.removeEventListener('click', destroyGameOverScreen)
    buildGameScreen();
  }

  function destroyGameFlandersScreen() {
    gameFlandersScreen.remove();
    restartButton.removeEventListener('click', destroyGameFlandersScreen)
    buildGameScreen();
  }

  buildSplash();

}

window.addEventListener('load', main);